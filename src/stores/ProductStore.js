import { defineStore } from "pinia";

export const useProductStore = defineStore('useProductStore', {
    state: () => ({
        cartProducts: localStorage.getItem('cartProducts') ? JSON.parse(localStorage.getItem('cartProducts')) : [] ,
    }),

    actions: {
        setCartProducts(value) {
            this.cartProducts.push(value)

            localStorage.setItem('cartProducts', JSON.stringify(this.cartProducts))
        },

        removeFromCart(id) {
            const index = this.cartProducts.findIndex(product => product.id === parseInt(id));
            if (index !== -1) {
                this.cartProducts.splice(index, 1);

                localStorage.setItem('cartProducts', JSON.stringify(this.cartProducts));
            }
        },

        updateCartProductCount(data) {
            let id = data.productID
            let count = data.productCount

            this.cartProducts = this.cartProducts.map(product => {
                if(product.id === id) {
                    product.count = count
                }

                return product
            })

            localStorage.setItem('cartProducts', JSON.stringify(this.cartProducts))
        },
    }
})