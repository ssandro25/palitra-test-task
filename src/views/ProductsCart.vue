<template>
    <div class="container">
        <div class="row row-cols-lg-2 row-cols-1 gy-4">
            <div
                v-for="product in products"
                :key="product.id"
                class="col"
            >
                <div class="border rounded overflow-hidden row m-0">
                    <div class="col-lg-6 p-0 border-end">
                        <img :src="product.thumbnail" class="w-100" alt="">
                    </div>

                    <div class="col-lg-6">
                        <div class="d-flex flex-column justify-content-between gap-3 h-100 p-2">
                            <div>
                                <p class="mb-0">
                                    {{ product.title }} {{ product.category }}
                                </p>

                                <p class="mb-0">
                                    {{ product.price }}

                                </p>
                            </div>

                            <div class="d-flex justify-content-between gap-2">
                                <div class="d-flex align-items-center border rounded">
                                    <button class="btn btn-sm border-0 p-0 change_count__btn"
                                            type="button"
                                    >
                                        <i class="fa-solid fa-minus w-100 h-100 d-flex align-items-center justify-content-center"></i>
                                    </button>

                                    <input
                                        class="form-control text-center p-2 border-start border-end border-0 rounded-0 cart_count__input"
                                        type="number"
                                        readonly
                                    >

                                    <button class="btn btn-sm border-0 p-0 change_count__btn"
                                            type="button"
                                    >
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>

                                <div>
                                    <button
                                        type="button"
                                        class="btn btn-danger w-100"
                                        @click="removeFromCart(product.id)"
                                    >
                                        <i class="fa-solid fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useProductStore } from "@/stores/ProductStore";
export default {
    name: "ProductsCart",

    data() {
        return {
            store: useProductStore(),

            products: []
        }
    },

    methods: {
        removeFromCart(id) {
            this.store.removeFromCart(id)
        }
    },

    mounted() {
        this.products = this.store.cartProducts
    }
}
</script>

<style scoped>
.cart_count__input,
.change_count__btn {
    width: 40px;
    height: 35px;
}
</style>