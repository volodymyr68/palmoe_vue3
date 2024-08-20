<script>
import {mapActions, mapGetters, mapState} from "pinia";
import {useCounterStore} from "@/stores/CounterStore.js";
import {useProductStore} from "@/stores/ProductStore.js";
import Pagination from "@/components/Pagination.vue";
import {useUserStore} from "@/stores/UserStore.js";

export default {
  name:"App",
  components: {Pagination},
  data(){
    return {
      productList:[]
    }
  },
  computed:{
    ...mapState(useCounterStore,["counter"]),
    ...mapState(useProductStore, ["products"]),
    ...mapGetters(useProductStore,["twoProducts"]),
    ...mapState(useUserStore,["userStore"]),
    ...mapGetters(useUserStore,["getAccess"]),
  },
  methods:{
    ...mapActions(useCounterStore,["increment","decrement","setCounter"]),
    ...mapActions(useProductStore,["getProducts","getProductsByCounter"]),
    ...mapActions(useUserStore,["setAccess","setDefaultFullName"])
  },
    mounted() {
    this.getProducts();
    this.setCounter();
    this.setDefaultFullName();
    this.setAccess(false)
  }
}
</script>

<template>
  <div class="app">
    <h1>Counter: {{ counter }}</h1>
    <button @click="increment()">Increment</button>
    <button @click="decrement()">Decrement</button>
    <p v-if="products.length">Products : {{ productList }}</p>
    <button @click="productList = getProductsByCounter()">Get Products By Counter</button>
    <p>TWO PRODUCTS FROM GETTER {{twoProducts}}</p>

    <Pagination/>
    <router-link :to="{ name: 'AuthPage' }">Auth Page</router-link>
    <v-btn @click="setAccess(!getAccess)">Change access</v-btn>
    <router-view></router-view>
  </div>


</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.app{
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
</style>