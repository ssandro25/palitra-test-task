<template>
    <div>
        {{ currentProduct }}
    </div>
</template>

<script>
import Api from "@/requests/ProductApi"

const api = new Api()
export default {
    name: "ViewProduct",

    data() {
        return {
            currentProduct: []
        }
    },

    mounted() {
        api.getProductView(this.$route.params.productID).then(response => {
            this.currentProduct = response.data
        })
    }
}
</script>

<style scoped>

</style>