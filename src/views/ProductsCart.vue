<template>
    <div class="container">
        <h1 class="mb-5">
            Cart
        </h1>

        <p v-if="!store.cartProducts.length" class="fs-3 mb-0">
            Cart is empty...
        </p>

        <div v-else>
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
        }
    },

    computed: {
        total() {
            return this.store.cartProducts.reduce((total, product) => {
                return total + (product.price * product.count);
            }, 0);
        }
    },
}
</script>

<style scoped>
.total__price {
    position: fixed;
    bottom: 12px;
    right: 12px;
}
</style>