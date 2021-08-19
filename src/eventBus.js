//事件总线

// export default {
//   //监听某一个事件
//   $on(eventName, handler) {
//     if(!listeners[eventName]) {
//       listeners[eventName] = new Set();
//     }
//     listeners[eventName].add(handler);
//   },


//   //取消监听某一事件
//   $off(eventName, handler) {
//     if(!listeners[eventName]) {
//       return;
//     }
//     listeners[eventName].delete(handler);
//   },

//   //触发事件
//   $emit(eventName, ...args) {
//     if(!listeners[eventName]) {
//       return;
//     }

//     for(const handler of listeners[eventName]) {
//       handler(...args);
//     }
//   }
//  }


import　Vue from "vue"

/* 
事件名： mainScroll
含义：主区域滚动条变化后触发
参数：滚动的dom元素


事件名：setMainScroll
含义：设置滚动条高度
参数：滚动条高度值

事件名：hideToTop
含义：组件销毁时隐藏ToTop
参数：无
*/
const app = new Vue({});
Vue.prototype.$bus = app;
export default app;