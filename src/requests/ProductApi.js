import axios from "axios";

export default class Api {
    getProducts() {
        return axios.get('https://dummyjson.com/products')
    }

    getProductView(productID) {
        return axios.get('https://dummyjson.com/products/'+productID)
    }
}