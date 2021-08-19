import "./mock/index"
import Vue from 'vue'
import App from './App.vue'

//导入路由配置
import router from "./router/index"

//导入全局样式
import "./styles/global.less";

//事件总线
import "./eventBus";


//向vue原型中添加消息弹框方法
import {showMessage} from "./utils"
Vue.prototype.$showMessage = showMessage;

//注册自定义指令
import vloading from "@/directives/loading.js"
import vlazy from "@/directives/lazy.js"
Vue.directive("loading", vloading)
Vue.directive("lazy", vlazy)

//引入仓库
import store from "@/store"
store.dispatch("setting/fetchSetting")

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
