import Vuex from "vuex"
import Vue from "vue"
import banner from "./banner"
import setting from "./setting"
import about from './about'
import project from "./project"

if(!window.Vuex){
  // 没有使用传统的方式引入Vuex
  Vue.use(Vuex);
}


export default new Vuex.Store({
  modules: {
    banner,
    setting,
    about,
    project
  },
  strict: true
})