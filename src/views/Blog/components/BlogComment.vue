<template>
  <div class="blog-comment-container">
    <h3 id="commentArea">评论区</h3>
    <MessageArea
      title="评论列表"
      :subTitle="`(${data.total ? data.total: '0'})`"
      :list="data.rows"
      :isListLoading="isLoading"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData.js";
import { getComments, postComment } from "@/api/blog.js";
export default {
  mixins:[fetchData({})],
  components: {
    MessageArea,
  },
  data() {
    return {
      page: 1,
      limit: 10,
    }
  },
  computed: {
    hasMore() {
      return this.data.rows.length < this.data.total;
    }
  },
  methods: {
    async fetchData() {
      return await getComments(this.$route.params.id, this.page, this.limit)
    },
    async handleSubmit(formData, callback) {
      const resp = await postComment({
        blogId: this.$route.params.id,
        ...formData,
      });
      this.data.rows.unshift(resp);
      this.data.total++;
      callback("评论成功！");
    },
    async fetchMore() {
      if(!this.hasMore) {
        return;
      }
      this.page++;
      this.isLoading = true;
      const resp = await this.fetchData();
      this.data.total = resp.total;
      this.data.rows = this.data.rows.concat(resp.rows);
      this.isLoading = false;
    },
    async handleScroll(dom) {
      if(this.isLoading) {
        //正在加载
        return;
      }
      const range = 100;
      const desc = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight);
      if(desc <= range) {
        //滚动到底部了
        this.fetchMore();
      }
    }
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  beforeDestroy() {
    this.$bus.$off("mainScroll", this.handleScroll);
  }
}
</script>

<style>

</style>