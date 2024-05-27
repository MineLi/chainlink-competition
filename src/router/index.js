import { createRouter, createWebHistory } from 'vue-router'
import multiguard from 'vue-router-multiguard'
import middlewares from "@/x/middlewares"
import routes from "./routes"
const defaultRoutes = [
  {
    path: '/',
    redirect: '/buyer/list'
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
    path: '/buyer/list',
    name: 'buyerList',
    meta: {
      title: "NFT List"
    },
    component: () => import("@/views/buyer/list.vue")
  },
  {
    path: '/buyer/detail',
    name: 'buyerDetail',
    meta: {
      title: "NFT Detail"
    },
    component: () => import("@/views/buyer/detail.vue")
  },
  {
    path: '/seller/create',
    name: 'sellerCreate',
    meta: {
      title: "Create"
    },
    component: () => import("@/views/seller/create.vue")
  },
  {
    path: '/seller/list',
    name: 'sellerList',
    meta: {
      title: "NFT List"
    },
    component: () => import("@/views/seller/list.vue")
  },
  {
    path: '/seller/detail',
    name: 'sellerDetail',
    meta: {
      title: "NFT"
    },
    component: () => import("@/views/seller/detail.vue")
  },
  {
    path: '/seller/delivery',
    name: 'sellerDelivery',
    meta: {
      title: "Delivery"
    },
    component: () => import("@/views/seller/delivery.vue")
  },
  {
    path: '/seller/login',
    name: 'sellerLogin',
    meta: {
      title: "Login"
    },
    component: () => import("@/views/seller/login.vue")
  },
  {
    path: '/buyer/login',
    name: 'buyerLogin',
    meta: {
      title: "Login"
    },
    component: () => import("@/views/buyer/login.vue")
  }
]
const router = createRouter({
  history: createWebHistory(''),
  routes:[...defaultRoutes, ...routes]
})

router.beforeEach(multiguard([...middlewares]))

export default router