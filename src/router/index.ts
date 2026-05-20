import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title:'Home',
      //show:true
    },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title:'Login',
      //show:true
    },
    component: () => import('../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
