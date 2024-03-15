<template>
    <div>
       {{ data }}
    </div>
</template>

<script>
import { useProductStore } from "@/stores/ProductStore";

import Api from "@/requests/ProductApi"

const api = new Api()
export default {
    name: "v-index",

    data() {
        return {
            store: useProductStore(),

            data: []
        }
    },

    mounted() {
        console.log(this.store.product)

        api.getProducts().then(response => {
            console.log(response.data)
        })
    }
}
</script>



<style scoped>

</style>