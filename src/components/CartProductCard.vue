<template>
    <div
        v-for="product in products"
        :key="product.id"
        class="col mb-3"
    >
        <div class="border rounded overflow-hidden row m-0">
            <div class="col-lg-6 p-0 border-end">
                <img :src="product.thumbnail" class="cart__product_image w-100" alt="">
            </div>

            <div class="col-lg-6">
                <div class="d-flex flex-column justify-content-between gap-3 h-100 p-2">
                    <div>
                        <p class="d-flex gap-1 mb-0">
                                    <span class="fw-bold">
                                        {{ product.title }}
                                    </span>

                            <span class="text-capitalize">
                                        {{ product.category }}
                                    </span>
                        </p>

                        <p class="mb-0">
                            {{ product.price * product.count}} $
                        </p>
                    </div>

                    <div class="d-flex justify-content-between gap-2">
                        <div class="d-flex align-items-center border rounded">
                            <button
                                type="button"
                                class="btn btn-sm border-0 p-0 change_count__btn"
                            >
                                <i
                                    v-if="product.count > 1"
                                    class="fa-solid fa-minus w-100 h-100 d-flex align-items-center justify-content-center"
                                    @click="decreaseQuantity(product.id)"
                                ></i>

                                <i
                                    v-if="product.count === 1"
                                    class="fa-solid fa-xmark text-danger w-100 h-100 d-flex align-items-center justify-content-center"
                                    @click="removeFromCart(product.id)"
                                ></i>
                            </button>

                            <input
                                v-model="product.count"
                                class="form-control text-center p-2 border-start border-end border-0 rounded-0 cart_count__input"
                                type="number"
                                readonly
                            >

                            <button
                                type="button"
                                class="btn btn-sm border-0 p-0 change_count__btn"
                                @click="increaseQuantity(product.id)"
                                :disabled="product.count >= product.stock"
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
</template>

<script>
import { useProductStore } from "@/stores/ProductStore";
export default {
    name: "CartProductCard",

    data() {
        return {
            store: useProductStore(),

            products: [],
        }
    },

    methods: {
        removeFromCart(id) {
            this.store.removeFromCart(id)
        },

        decreaseQuantity(productID) {
            let product = this.store.cartProducts.find(product => product.id === productID)
            product.count--

            let data = {
                'productID' : productID,
                'productCount' : product.count
            }

            this.store.updateCartProductCount(data)
        },

        increaseQuantity(productID) {
            let product = this.store.cartProducts.find(product => product.id === productID)
            product.count++

            let data = {
                'productID' : productID,
                'productCount' : product.count
            }

            this.store.updateCartProductCount(data)
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
.cart__product_image {
    height: 120px;
    object-fit: cover;
}
.cart_count__input,
.change_count__btn {
    width: 55px;
    height: 35px;
}


</style>