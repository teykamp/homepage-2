import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      name: 'about',
      component: AboutView
    },
    {
      path: '/',
      name: 'work',
      component: HomeView
    },
    {
      path: '/',
      name: 'contact',
      component: AboutView
    },
  ]
})

export default router