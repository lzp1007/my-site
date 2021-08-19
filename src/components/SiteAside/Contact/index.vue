<template>
  <ul class="contact-container">
    <li>
      <a :href="data.github" target="blank">
        <div class="icon">
          <Icon type="github" />
        </div>
        <span>{{data.githubName}}</span>
      </a>
    </li>
    <li>
      <a href="tencent://message/?Menu=yes&uin=2509817974&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45">
        <div class="icon">
          <Icon type="qq"/>
        </div>
        <span>{{data.qq}}</span>
        <div class="pop">
          <img :src="data.qqQrCode" alt="">
        </div>
      </a>
    </li>
    <li>
      <a>
        <div class="icon">
          <Icon type="wechat" />
        </div>
        <span>{{data.weixin}}</span>
      </a>
      <div class="pop">
        <img
          :src="data.weixinQrCode"
          alt=""
        />
      </div>
    </li>
    <li>
      <a href="mailto:lzp19990909@163.com">
        <div class="icon">
          <Icon type="email"/>
        </div>
        <span>{{data.mail}}</span>
      </a>
    </li>
    
  </ul>
</template>

<script>
import { mapState } from "vuex"
import Icon from "@/components/Icon"
export default {
  components: {
    Icon
  },
  computed: {
    ...mapState("setting", ["data"])
  }
}
</script>

<style scoped lang="less">
  @import "~@/styles/var.less";
  @import "~@/styles/global.less";
  .contact-container {
    list-style: none;
    margin: 0;
    box-sizing: border-box;
    padding: 20px;
    color: @gray;
    @itemHeight: 30px;
    li {
      height: @itemHeight;
      line-height: 30px;
      margin: 10px 0;
      position: relative;

      &:hover {
        .pop {
          transform: scaleY(1);
        }
      }

      a {
        display: flex;
        align-items: center;
        cursor: pointer;
        font-size: 14px;
        .icon {
          width: 32px;
          font-size: 20px;
        }
      }
    }

    .pop {
      position: absolute;
      left: 0;
      bottom: @itemHeight + 5px;
      padding: 10px;
      background: #fff;
      border-radius: 5px;
      transform: scaleY(0);
      transform-origin: center bottom;
      transition: 0.3s;
      img {
        width: 130px;
        height: 130px;
        display: block;
      }

      &::after {
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%) rotate(45deg);
        width: 10px;
        height: 10px;
        bottom: -5px;
        background-color: #fff;
      }
    }
  }
</style>