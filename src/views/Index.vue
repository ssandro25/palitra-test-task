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

        <nav class="sticky-bottom d-flex justify-content-center bg-white pt-3">
            <ul class="pagination">
                <li v-for="pageNumber in totalPages"
                    :key="pageNumber"
                    class="page-item"
                    :class="{
                        'active' : page === pageNumber
                    }"
                    aria-current="page"
                    @click="changePage(pageNumber)"
                >
                    <span class="page-link">{{ pageNumber }}</span>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import { useProductStore } from "@/stores/ProductStore";
import ProductCard from "@/components/ProductCard.vue";
import axios from "axios";

export default {
    name: "v-index",

    components: {
        ProductCard
    },

    data() {
        return {
            store: useProductStore(),
            products: [],
            page: 1,
            limit: 8,
            totalPages: 0,
        }
    },

    watch: {
        page() {
            this.fetchProducts();
        }
    },

    methods: {
        async fetchProducts() {
            try {
                const response = await axios.get('https://dummyjson.com/products', {
                    params: {
                        skip: (this.page - 1) * this.limit,
                        limit: this.limit
                    }
                });
                this.products = response.data.products;
                this.totalPages = Math.ceil(100 / this.limit);
                this.updateURL();
            } catch (e) {
                alert('Products not found!')
            }
        },

        changePage(pageNumber) {
            this.page = pageNumber;
            this.updateURL();
        },

        updateURL() {
            const newUrl = new URL(window.location.href);
            newUrl.searchParams.set('page', this.page);
            window.history.pushState({}, '', newUrl);
        },

        getPageFromURL() {
            const urlParams = new URLSearchParams(window.location.search);
            const page = parseInt(urlParams.get('page'));
            if (!isNaN(page) && page > 0 && page <= this.totalPages) {
                this.page = page;
            }
        }
    },

    mounted() {
        this.getPageFromURL();
        this.fetchProducts();
    }
}
</script>


<style scoped>
.page-item {
    cursor: pointer;
}
</style>