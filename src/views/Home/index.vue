<template>
  <div v-loading="loading" class="home-container" @wheel="handleWheel">
    <ul 
      ref="container" class="carousel-container" 
      :style="{marginTop}"
       @transitionend="handleTransitionEnd"
      >
      <li 
        v-for="item in data" 
        :key="item.id">
        <CarouselItem :banner="item"/>
      </li>
    </ul>
    <div 
      v-show="index >= 1" 
      class="arrow-up" 
      @click="switchTo(index - 1)"
    >
      <Icon type="arrowUp"/>
    </div>
    <div 
      v-show="index < data.length - 1" 
      class="arrow-down" 
      @click="switchTo(index + 1)"
    >
      <Icon type="arrowDown"/>
    </div>

    <ul class="indicator">
      <li 
        @click="switchTo(i)" 
        :class="{active: i === index}" 
        v-for="(item, i) in data" 
        :key="item.id">
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex"
import Icon from "@/components/Icon"
import CarouselItem from "./CarouselItem.vue"
export default {
  components: {
    CarouselItem,
    Icon
  },
  data() {
    return {
      index: 0,
      contentHeight: 0,
      switching: false   //是否正在切换中
    }
  },
  created() {
    this.$store.dispatch("banner/fetchBanner");
  },
  mounted() {
    this.contentHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleResize)
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  computed: {
    ...mapState("banner", ["loading", "data"]),
    marginTop() {
      return -(this.index * this.contentHeight) + "px";
    }
  },
  methods: {
    switchTo(index) {
      this.index = index;
    },
    handleResize() {
      this.contentHeight = this.$refs.container.clientHeight;
    },
    handleWheel(e) {
      if(this.switching) {
        return;
      }
      if(e.deltaY < -50 && this.index > 0) {
        //滚轮向上滚动
        this.switching = true;
        this.index--;
      }
      if(e.deltaY > 50 && this.index < this.data.length - 1) {
        //滚轮向下滚动
        this.switching = true;
        this.index++;
      }
    },
    handleTransitionEnd() {
      this.switching =false;
    }
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
  .home-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    .carousel-container {
      width: 100%;
      height: 100%;
      transition: 1s;

      li {
        width: 100%;
        height: 100%;
      }
    }

    .indicator {
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);

      li {
        width: 8px;
        height: 8px;
        cursor: pointer;
        border-radius: 50%;
        margin: 8px 0;
        box-sizing: border-box;
        border: 1px solid #fff;
        background-color: @dark;

        &.active {
          background-color: #fff;
        }
      }
    }

    .arrow-up, .arrow-down {
      position: absolute;
      left: 50%;
      cursor: pointer;
      color: @gray;
      transform: translateX(-50%);
    }

    .arrow-up {
      top: 25px;
      animation: jump-up 2s infinite;
    }

    .arrow-down {
      bottom: 25px;
      animation: jump-up 2s infinite;
    }
    @jump: 5px;
    @keyframes jump-up {
      0% {
        transform: translate(-50%, @jump);
      }

      50% {
        transform: translate(-50%, -@jump);
      }

      100% {
        transform: translate(-50%, @jump);
      }
    }

    @keyframes jump-down {
      0% {
        transform: translate(-50%, -@jump);
      }

      50% {
        transform: translate(-50%, @jump);
      }

      100% {
        transform: translate(-50%, -@jump);
      }
    }
  }
</style>