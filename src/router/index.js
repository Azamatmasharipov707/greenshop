import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/Home.vue')
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('../pages/Shop.vue')
    },
    {
      path: '/shoppingCart',
      name: 'shopping',
      component: () => import('../pages/ShoppingCart.vue'),
    }
  ]
})

export default router
