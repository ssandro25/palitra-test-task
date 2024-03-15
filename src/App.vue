<template>
    <Header />

    <main class="container-fluid mt-5">
        <router-view/>
    </main>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
    components: {
        Header
    }
}
</script>

<style>
</style>