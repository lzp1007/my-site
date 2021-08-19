<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="tocWithSelect" @select="handleSelect"/>
  </div>
</template>

<script>
import RightList from "./SideList"
import {debounce} from "@/utils"
export default {
  props: {
    toc: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      activeAnchor: "article-md-title-1",
    }
  },
  components: {
    RightList
  },
  computed: {
    tocWithSelect() {
      const getToc = (toc = [])=> {
        return toc.map(t => ({
          ...t,
          isSelect: t.anchor === this.activeAnchor,
          children: getToc(t.children),
        }))
      }

      return getToc(this.toc);
    },
    //得到toc对应的dom数组
    doms() {
      const doms = [];
      const addToDoms = (toc) =>{
        for(const t of toc) {
          doms.push(document.getElementById(t.anchor));
          if(t.children && t.children.length) {
            addToDoms(t.children);
          }
        }
      }
      addToDoms(this.toc);
      return doms;
    }
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor;
    },

    setSelect() {
      this.activeAnchor = "";
      const range = 50;
      for(const dom of this.doms) {
        //当前dom是否被选中
        if(!dom) {
          continue;
        }

        //当前元素距离视口顶部的距离
        const top = dom.getBoundingClientRect().top;
        if(top > 0 && top <= range) {
          this.activeAnchor = dom.id;
          return;
        } else if( top > range) {
          return;
        } else {
          this.activeAnchor = dom.id;
        }
      }
    }
  },
  created() {
    this.setSelectDebounce = debounce(this.setSelect, 50);
    this.$bus.$on("mainScroll", this.setSelectDebounce);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.setSelectDebounce);
  }
}
</script>

<style scoped lang="less">
  .blog-toc-container {
    h2 {
      margin: 10px 0;
      font-size: 1.2em;
    }
  }
</style>