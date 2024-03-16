import { createRouter, createWebHashHistory } from 'vue-router'
import Index from "@/views/Index.vue";
import ViewProduct from "@/views/ViewProduct.vue";
import ProductsCart from "@/views/ProductsCart.vue";
import CheckOut from "@/views/CheckOut.vue";

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
    meta: {
      title: 'NEWSROOM | Market'
    }
  },

  {
    path: '/product/:productID',
    name: 'product',
    component: ViewProduct,
    meta: {
      title: 'Product'
    }
  },

  {
    path: '/cart',
    name: 'cart',
    component: ProductsCart,
    meta: {
      title: 'Cart'
    }
  },

  {
    path: '/check-out',
    name: 'check-out',
    component: CheckOut,
    meta: {
      title: 'CheckOut'
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to) => {
  document.title = to.meta.title
})
export default router
