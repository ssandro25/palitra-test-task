import { defineStore } from "pinia";

export const useProductStore = defineStore('useProductStore', {
    state: () => ({
        product: [1, 2, 3, 4]
    }),

})