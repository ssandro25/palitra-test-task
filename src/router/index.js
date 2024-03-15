import { createRouter, createWebHashHistory } from 'vue-router'
import Index from "@/views/Index.vue";
import ViewProduct from "@/views/ViewProduct.vue";
import ProductsCart from "@/views/ProductsCart.vue";
import CheckOut from "@/views/CheckOut.vue";

const routes = [
  {
    path: '/',
    name: 'index',
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

  {
    path: '/check-out',
    name: 'check-out',
    component: CheckOut
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
