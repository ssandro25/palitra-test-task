<template>
    <div class="border rounded p-3">
        <div class="d-flex align-items-center justify-content-between">
            <p class="mb-0">
                Price: {{ currentProduct.price }} $
            </p>

            <p class="fs14 text-success mb-0">
                In stock: {{ currentProduct.stock }}
            </p>
        </div>

        <div class="d-flex align-items-center gap-2 mt-3 mb-0">
            <p class="mb-0">
                Rate: {{ currentProduct.rating }}
            </p>

            <CheckRating :current-product="currentProduct"/>
        </div>

        <div class="d-flex align-items-center gap-3 mt-3">
            <button
                :disabled="addedToCart"
                type="button"
                class="btn btn-warning flex-grow-1"
                @click="addToCart()"
            >
                Add to cart
            </button>

            <button
                type="button"
                class="btn btn-success flex-grow-1"
                @click="pushCheckOutRoute"
            >
                Buy
            </button>
        </div>
    </div>
</template>

<script>
import {useProductStore} from "@/stores/ProductStore";
import CheckRating from "@/components/CheckRating.vue";

export default {
    name: "ProductInfo",

    components: {
        CheckRating
    },

    props: {
        currentProduct: Object,
        addedToCart: Boolean
    },

    data() {
        return {
            store: useProductStore(),
        }
    },

    methods: {
        addToCart() {
            // eslint-disable-next-line vue/no-mutating-props
            this.currentProduct.count = 1

            this.store.setCartProducts(this.currentProduct)
        },

        pushCheckOutRoute() {
            if (!this.addedToCart) {
                this.addToCart()
            }

            this.$router.push('/check-out')
        }
    },
}
</script>


<style scoped lang="scss">

</style>