import { createRouter, createWebHashHistory } from 'vue-router'
import Index from "@/views/Index.vue";
import ViewProduct from "@/views/ViewProduct.vue";
import ProductsCart from "@/views/ProductsCart.vue";

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },

  {
    path: '/:page',
    component: Index
  },

  {
    path: '/product/:productID',
    name: 'product',
    component: ViewProduct
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
