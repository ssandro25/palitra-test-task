import { createRouter, createWebHashHistory } from 'vue-router'
import Index from "@/views/Index.vue";
import ProductsCart from "@/views/ProductsCart.vue";

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },

  {
    path: '/cart',
    name: 'cart',
    component: ProductsCart
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
