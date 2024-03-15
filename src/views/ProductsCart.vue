<template>
    <div class="container">
        <div class="row row-cols-lg-2 row-cols-1 gy-4">
            <CartProductCard />
        </div>

        <div class="d-flex gap-3 mt-3 total__price">
            <p class="fs-4 mb-0">
                Total:
                <span class="fw-bold">
                    {{ total }} $
                </span>
            </p>

            <router-link :to="{ name: 'check-out' }" class="btn btn-success px-5">
                Buy
            </router-link>
        </div>
    </div>
</template>

<script>
import { useProductStore } from "@/stores/ProductStore";
import CartProductCard from "@/components/CartProductCard.vue";
export default {
    name: "ProductsCart",
    components: {CartProductCard},

    data() {
        return {
            store: useProductStore(),

            products: [],
        }
    },

    computed: {
        total() {
            return this.products.reduce((total, product) => {
                return total + (product.price * product.count);
            }, 0);
        }
    },

    mounted() {
        this.products = this.store.cartProducts
    }
}
</script>

<style scoped>
.total__price {
    position: fixed;
    bottom: 12px;
    right: 12px;
}
</style>