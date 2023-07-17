import { createRouter, createWebHistory } from 'vue-router'
import authRoutes, { authRoutesName } from './auth'
import productRoutes from './product'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/product/list'
    },
    ...authRoutes,
    ...productRoutes,
    {
      path: '/:pathMatch(.*)',
      component: () => import('@/views/not-found/NotFound.vue')
    }
  ]
})

export const routeNames = {
  ...authRoutesName
}

export default router
