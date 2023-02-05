import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import Home from "../page/Home.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../page/About.vue')
  },
  {
    path: '/program',
    component: () => import('../page/Program.vue')
  },
  {
    path: '/qasba-page',
    component: () => import('../page/Qasba_Page.vue')
  },
  {
    path: '/terms-conditions',
    component: () => import('../components/Terms_Conditions.vue')
  },
  {
    path: '/product/:id',
    component: () => import('../page/Product.vue')
  },
  {
    path: '/admin',
    component: () => import('../page/Admin.vue')
  },
  {
    path: '/payment-product',
    component: () => import('../page/Payment.vue')
  },
  {
    path: '/shop',
    component: () => import('../page/Shop.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
