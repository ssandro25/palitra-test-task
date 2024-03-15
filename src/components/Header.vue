<template>
    <header class="header container-fluid p-3 bg-body-secondary">
        <div class="container d-flex align-items-center justify-content-between">
            <router-link :to="{ name: 'index' }">
                LOGO
            </router-link>

            <div class="d-flex align-items-center gap-3">
                <router-link :to="{ name: 'cart' }" class="d-block position-relative">
                    <img :src="CartIcon" width="20" alt="Cart icon">

                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                        3
                    </span>
                </router-link>
            </div>
        </div>
    </header>
</template>

<script>
import CartIcon from "@/assets/images/shopping-bag-icon.svg"
export default {
    name: "v-header",

    data() {
        return {
            CartIcon
        }
    }
}
</script>

<style scoped>

</style>