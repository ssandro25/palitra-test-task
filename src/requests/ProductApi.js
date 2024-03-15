import axios from "axios";

export default class Api {
    getProducts() {
        return axios.get('https://dummyjson.com/products')
    }
}