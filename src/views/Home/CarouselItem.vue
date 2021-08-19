<template>
  <div 
    class="carousel-item-container" 
    ref="container"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div class="img-container" ref="image" :style="imagePosition">
      <ImageLoader 
        @load="showText()" 
        :src="banner.bigImg" 
        :placeholder="banner.midImg" 
      />
    </div>
    <div class="title" ref="title">
      {{banner.title}}
    </div>
    <div class="desc" ref="desc">
      {{banner.description}}
    </div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader"
export default {
  props: ["banner"],
  components: {
    ImageLoader
  },
  data() {
    return {
      containerSize: null, // 外层容器的尺寸
      innerSize: null, // 里层图片的尺寸
      mouseX: 0, // 鼠标相对外层容器的横坐标
      mouseY: 0, // 鼠标相对外层容器的纵坐标
    }
  },
  methods: {
    showText(){
      this.$refs.title.style.opacity = 1;
      this.$refs.desc.style.opacity = 1;
    },
    setSize() {
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight
      };
      this.innerSize = {
        width: this.$refs.image.clientWidth,
        height: this.$refs.image.clientHeight
      }
    },
    handleMouseMove(e) {
      const rect = this.$refs.container.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    },
    handleMouseLeave() {
      this.mouseX = this.center.x;
      this.mouseY = this.center.y;
    },
  },
  computed: {
    center() {
      return {
        x: this.containerSize.width / 2,
        y: this.containerSize.height / 2,
      };
    },
    //图片坐标
    imagePosition() {
      if(!this.innerSize || !this.containerSize) {
        return;
      }
      const extraWidth = this.innerSize.width - this.containerSize.width;
      const extraHeight = this.innerSize.height - this.containerSize.height;

      const left = (-extraWidth / this.containerSize.width) * this.mouseX;
      const top = (-extraHeight / this.containerSize.height) * this.mouseY;

      return {
        transform: `translate(${left}px, ${top}px)`,
      }
    }
  },
  mounted() {
    this.setSize();
    this.mouseX = this.center.x;
    this.mouseY = this.center.y;
    window.addEventListener("resize", this.setSize);
  },
  destroyed() {
    window.removeEventListener("resize", this.setSize);
  },
}
</script>

<style scoped lang="less">
  .carousel-item-container {
    width: 100%;
    height: 100%;
    color: #fff;
    position: relative;
    overflow: hidden;


    .img-container {
      width: 110%;
      height: 110%;
      transition: .2s;
      position: absolute;
      left: 0;
      top: 0;
    }

    .title, .desc {
      position: absolute;
      left: 50px;
      opacity: 0;
      letter-spacing: 5px;
      text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
      0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);

    }

    .title {
      font-size: 1.5em;
      transition: 1s;
      font-weight: bold;
      top: calc(50% - 80px);
    }

    .desc {
      transition: 2s 1s;
      font-size: 1.2em;
      top: calc(50% - 20px);
    }
  }
</style>