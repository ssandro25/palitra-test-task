<template>
    <div class="container">
        <div class="row row-cols-lg-4 row-cols-md-2 row-cols-1 gy-4">
            <ProductCard
                v-for="product in products"
                :key="product.id"
                :product="product"
                class="col"
            />
        </div>
    </div>
</template>

<script>
import { useProductStore } from "@/stores/ProductStore";

import Api from "@/requests/ProductApi"
import ProductCard from "@/components/ProductCard.vue";

const api = new Api()
export default {
    name: "v-index",

    components: {
        ProductCard
    },

    data() {
        return {
            store: useProductStore(),
            products: []
        }
    },

    mounted() {
        api.getProducts().then(response => this.products = response.data.products)
    }
}
</script>


<style scoped>

</style>