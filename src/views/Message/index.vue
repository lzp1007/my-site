<template>
  <div class="message-container" ref="messageContainer">
    <MessageArea
      v-if="data"
      title="留言板"
      :subTitle="`(${data.total ? data.total: '0'})`"
      :isListLoading="isLoading"
      :list="data.rows"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea"
import fetchData from "@/mixins/fetchData"
import mainScroll from "@/mixins/mainScroll"
import * as msgApi from "@/api/message.js"
export default {
  mixins: [fetchData({}), mainScroll("messageContainer")],
  components: {
    MessageArea
  },
  data(){
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
      return await msgApi.getMessages(this.page, this.limit);
    },
    async handleSubmit(data, callback) {
      const resp = await msgApi.postMessage(data);
      this.data.rows.unshift(resp);
      this.data.total++;
      callback("感谢您的留言！");
    },
    handleScroll(dom) {
       if(this.isLoading) {
         return;
       }

       const range = 200;
       const desc = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight);
       if(desc <= range) {
         this.fetchMore();
       }
    },
    async fetchMore() {
      if(!this.hasMore) {
        return;
      }
      this.isLoading = true;
      this.page++;
      const resp = await this.fetchData();
      this.data.total = resp.total;
      this.data.rows = this.data.rows.concat(resp.rows);
      this.isLoading = false;
    }
  },
  mounted() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  beforeDestroy() {
    this.$bus.$off("mainScroll", this.handleScroll);
  }
}
</script>

<style scoped lang="less">
  .message-container {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 25px 0;
    box-sizing: border-box;
    scroll-behavior: smooth;

    .message-area-container {
      width: 800px;
      margin: 0 auto;
    }
  }
</style>