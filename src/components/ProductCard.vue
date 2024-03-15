<template>
    <div class="product">
        <div class="border rounded">
            <div class="product__image rounded-top overflow-hidden">
                <img :src="product.thumbnail" class="w-100" alt="">
            </div>

            <router-link :to="'/product/'+product.id"  class="product__title d-block text-decoration-none fw-bold text-center mt-2 mb-0">
                {{ product.title }}
            </router-link>

            <p class="product__price mt-2 text-center mb-0">
                {{ product.price }} $
            </p>

            <p class="product__category text-capitalize text-center mt-2 mb-0">
                {{ product.category }}
            </p>

            <p class="product__description p-2 mb-0">
                {{ product.description }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductCard",

    props: {
        product: {
            type: Object
        }
    },
}
</script>

<style lang="scss" scoped>
.product {
    &__image img {
        height: 202px;
        object-fit: cover;
    }

    &__description {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        height: 60px;
    }
}
</style>