import NotFound from "@/views/NotFound.vue"
export default [
  { name: "Home", path: "/", component: () => import("@/views/Home"), meta: { title: "首页" } },
  { name: "About", path: "/about", component: () => import("@/views/About"), meta: { title: "关于我" } },
  { name: "Blog", path: "/article", component: () => import("@/views/Blog"), meta: { title: "文章" } },
  { name: "Category", path: "/article/cate/:categoryId", component: () => import("@/views/Blog"), meta: { title: "文章" } },
  { name: "Detail", path: "/article/:id", component: () => import("@/views/Blog/Detail"), meta: { title: "文章详情" } },
  { name: "Project", path: "/project", component: () => import("@/views/Project"), meta: { title: "项目&效果" } },
  { name: "Message", path: "/message", component: () => import("@/views/Message"), meta: { title: "留言板" } },
  {name: "NotFound", path: "*", component: NotFound}
]