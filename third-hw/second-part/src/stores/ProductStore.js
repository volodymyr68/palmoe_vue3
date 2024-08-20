import {defineStore} from "pinia";
import {useCounterStore} from "@/stores/CounterStore.js";
import {axiosInstance} from "@/services/axios.js";

export const useProductStore = defineStore("product",{
    state: () => ({
        productsState: [],
    }),
    getters:{
        products: (state) => state.productsState,
        twoProducts : (state) => state.products.filter((product) => product.id <= 2)
    },
    actions:{
        async getProducts(){
            try{
                const response = await axiosInstance.get("/products?limit=5");
                console.log(response)
                this.productsState = response.data;
            }catch (error){
                this.errors.push("Can't get products");
            }
        },
        getProductsByCounter() {
            const counterStore = useCounterStore();
            return this.productsState.filter((product) => product.id <= counterStore.counter);
        },
    }
});