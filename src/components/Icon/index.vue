<template>
  <i class="iconfont icon-container" :class="getType"></i>
</template>

<script>
const classMap = {
  blog: "icon-37",
  qq: "icon-icon",
  info: "icon-info",
  warn: "icon-warn1",
  home: "icon-zhuye",
  empty: "icon-kong",
  error: "icon-error",
  about: "icon-guanyu",
  chat: "icon-liuyan",
  email: "icon-youxiang",
  code: "icon-xiaoguo",
  github: "icon-huaban88",
  wechat: "icon-wechat-fill",
  phone: "icon-phone-channel",
  arrowUp: "icon-a-LeftArrow",
  success: "icon-chenggongtishi",
  arrowDown: "icon-a-LeftArrow-copy"
}
export const types = Object.keys(classMap);
export default {   
  props: {
    type: {
      type: String,
      required: true
    }
  },
  computed: {
    getType() {
      return classMap[this.type];
    }
  }
}
</script>

<style scoped>
@import "//at.alicdn.com/t/font_2425100_m7rxqd2fhvk.css";

  .iconfont {
    color: inherit;
    font-size: inherit;
  }
</style>