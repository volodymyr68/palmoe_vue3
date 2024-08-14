<script>
import Products from "@/components/Products.vue";
import Tab from "@/components/Tab.vue";


export default {
  name: "App",
  components: {Tab, Products},
  methods:{
  }
};

</script>

<template>
  <div>
    <Tab/>
    <Products/>
  </div>


</template>

<style scoped>
*{
  margin:0;
  padding: 0;
}
.white{
  background: white;
}

.dark{
  background: darkgray;
}

</style>
