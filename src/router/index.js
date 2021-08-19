import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes"
import titleController from "@/utils/titleController"

if(!window.VueRouter){
  // 没有使用传统的方式引入VueRouter
  Vue.use(VueRouter);
}


const router = new VueRouter({
  mode: "history",
  routes     //路由匹配规则
})

router.afterEach((to, from) => {
  if(to.meta.title) {
    titleController.setRouteTitle(to.meta.title);
  }
})

export default router;