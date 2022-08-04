import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import PageNotFound from '@/views/PageNotFound.vue'

// lazy-loaded 需要的時候才去載入
const About = () => import('@/views/About.vue')

const routes = [
  {
    path: '/',
    name: 'Root',
    component: Login,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },  
  {
    path: '/home',
    name: 'Home', // 具名路由，可配合 <router-link :to="{ name: 'Home' }">
    component: Home
  },
  // lazy-loaded
  {
    path: '/about/',
    name: 'About',
    component: About
  },
  // 404 要放在最後面
  {
    path: '/:pathMatch(.*)*',
    component: PageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(), // default: HTML5 History API
  routes
})

// // Navigation Guard
router.beforeEach((to, from) => {
  const isLogin = localStorage.getItem('user');

  if (!isLogin && to.name !== 'Root') {
    return { name: 'Root' }
  }

})

export default router
