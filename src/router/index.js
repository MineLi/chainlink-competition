import { createRouter, createWebHistory } from 'vue-router'
import multiguard from 'vue-router-multiguard'
import middlewares from "@/x/middlewares"
import routes from "./routes"
const defaultRoutes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      title: "HOME"
    },
    component: () => import("@/views/home.vue")
  },
  {
    path: '/wap/list',
    name: 'wapList',
    meta: {
      title: "NFT List"
    },
    component: () => import("@/views/nft/wap_list.vue")
  },
  {
    path: '/wap/detail',
    name: 'wapDetail',
    meta: {
      title: "NFT Detail"
    },
    component: () => import("@/views/nft/wap_detail.vue")
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: "Login"
    },
    component: () => import("@/views/login/index.vue")
  }
]
const router = createRouter({
  history: createWebHistory(''),
  routes:[...defaultRoutes, ...routes]
})

router.beforeEach(multiguard([...middlewares]))

export default router