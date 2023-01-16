import { createRouter, createWebHistory } from 'vue-router'
import LateNight from "@/views/LateNight.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'late-night',
      component: LateNight
    },
    {
      path: '/calculator',
      name: 'calculator',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TipCalculator.vue')
    }
  ]
})

export default router
