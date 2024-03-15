<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <ProductCarousel :current-product="currentProduct"/>
            </div>

            <div class="col-lg-3">
                <ProductDescription :current-product="currentProduct"/>
            </div>

            <div class="col-lg-3 mt-lg-0 mt-3">
                <ProductInfo :current-product="currentProduct"/>
            </div>
        </div>
    </div>


</template>

<script>
import axios from "axios";
import ProductCarousel from "@/components/ProductCarousel.vue";
import ProductDescription from "@/components/ProductDescription.vue";
import ProductInfo from "@/components/ProductInfo.vue";

export default {
    name: "ViewProduct",

    components: {
        ProductInfo,
        ProductDescription,
        ProductCarousel
    },

    data() {
        return {
            currentProduct: [],
        }
    },

    methods: {
        async fetchCurrentProduct() {
            try {
                const response = await axios.get('https://dummyjson.com/products/'+this.$route.params.productID);
                this.currentProduct = response.data;
            } catch (e) {
                alert('Product not found!')
            }
        },
    },

    mounted() {
        this.fetchCurrentProduct()
    }
}
</script>

<style scoped>

</style>