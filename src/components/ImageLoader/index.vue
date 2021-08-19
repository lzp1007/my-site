<template>
  <div class="image-loader-container">
      <img v-if="!everythingDone" class="placeholder" :src="placeholder" alt="">
      <img @load="handleLoad" class="origin" :src="src" :style="{opacity: originOpacity, transition: `${duration}ms`}" alt="">
  </div>
</template>

<script>
export default {
  data() {
    return {
      loaded: false,   //原图是否加载完成
      everythingDone: false  //原图完全展示出来
    }
  },
  props: {
    src: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      default: 1000
    }
  },
  methods: {
    handleLoad() {
      this.loaded = true;
      setTimeout(() => {
        this.everythingDone = true;
        this.$emit("load");
      }, this.duration)
    }
  },
  computed: {
    originOpacity() {
      return this.loaded ? 1 : 0;
    }
  }
}
</script>

<style scoped lang="less">

@import "~@/styles/mixin.less";
  .image-loader-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    img {
      object-fit: cover;
      .self-fill();
    }

    img.placeholder {
      filter: blur(2vw);
    }

    img.origin {
      opacity: 0;
    }
  }
</style>