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
    </div>
</template>

<script>
import CheckRating from "@/components/CheckRating.vue";

export default {
    name: "ProductInfo",

    components: {
        CheckRating
    },

    props: {
        currentProduct: Object
    },
}
</script>



<style scoped lang="scss">

</style>