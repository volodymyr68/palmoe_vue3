<script>
import axiosInstance from "../../services/axios.js";
import OtherComponent from "@/components/OtherComponent.vue";

export default {
  name:"Products",
  components: {OtherComponent},
  data(){
    return{
      products:[],
      otherComponent:false,
      isDisabled:false,
      isReadonly:false,
    };
  },
  methods:{
    getProducts(){
      axiosInstance.get("/products")
          .then(response =>{
            console.log(response);
            this.products = response.data;
          })
          .catch(error=>{
            console.log(error);
          });
    }
  },
  mounted() {
    this.getProducts();
  }
}
</script>

<template>
  <v-btn @click="this.otherComponent = !this.otherComponent"
  >show other components</v-btn
  >
  <v-spacer />
  <p v-show="otherComponent">V-SHOW EXAMPLE</p>
  <v-btn @click="this.isReadonly = !this.isReadonly">CHANGE READONLY</v-btn>
  <v-btn @click="this.isDisabled = !this.isDisabled"
  >CHANGE DISABLE/ENABLE</v-btn
  >
  <v-spacer />
  <label>
    V-BIND EXAMPLE
    <input
        type="text"
        placeholder="text"
        v-bind="{ disabled: isDisabled, readonly: isReadonly }"
    />
  </label>
  <v-spacer />
  <v-container class="bg-surface-variant" v-if="!otherComponent">
    <v-row class="mb-6" no-gutters>
      <Product
          class="pa-2 ma-2"
          v-for="product in products"
          :key="product.id"
          :product="product"
      />
    </v-row>
  </v-container>
  <v-container v-else>
    <OtherComponent />
  </v-container>
</template>

<style scoped></style>
