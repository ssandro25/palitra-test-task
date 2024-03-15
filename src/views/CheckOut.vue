<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <form action="#" method="get">
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="email" placeholder="name@example.com">
                    </div>

                    <div class="mb-3">
                        <label for="name" class="form-label">Your name</label>
                        <input type="text" class="form-control" id="name" placeholder="Your name">
                    </div>

                    <div class="mb-3">
                        <label for="number" class="form-label">Number</label>
                        <input type="number" class="form-control" id="number" placeholder="Enter number">
                    </div>

                    <div class="mb-3">
                        <label for="city" class="form-label">City</label>
                        <input type="text" class="form-control" id="city" placeholder="Enter city">
                    </div>

                    <div class="mb-3">
                        <label for="comment" class="form-label">Enter comment</label>
                        <textarea class="form-control" id="comment" rows="3"></textarea>
                    </div>
                </form>
            </div>

            <div class="col-lg-6 mt-lg-0 mt-3">
                <div class="d-flex align-items-center gap-5 mb-3">
                    <router-link :to="{ name: 'cart' }" class="text-decoration-none text-dark">
                        Back to cart
                    </router-link>

                    <p class="text-center fs-3 mb-0">
                        Products
                    </p>
                </div>

                <CartProductCard />

                <p class="fw-bold mb-0">
                    Total: {{ total }} $
                </p>

                <router-link to="/" class="btn btn-success px-5">
                    PAY
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import CartProductCard from "@/components/CartProductCard.vue";
import { useProductStore } from "@/stores/ProductStore";

export default {
    name: "CheckOut",

    components: {
        CartProductCard,
    },

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

</style>