<template>
  <div class="about-container" v-loading="loading || !srcLoaded">
    <iframe @load="srcLoaded = true" class="about-content" :src="src" frameborder="0"></iframe>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {  
  computed: {
    ...mapState("about", {
      src: "data",
      loading: "loading"
    })
  },
  data() {
    return {
      srcLoaded: false //网页是否加载完成
    }
  },
  created() {
    this.$store.dispatch("about/fetchAbout");
  }
}
</script>

<style scoped lang="less">
  .about-container {
    width: 100%;
    height: 100%;
    overflow: hidden;

    .about-content {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
</style>