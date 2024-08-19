<script>
export default {
  name: "FourthRoute",
};
</script>

<template>
  <h1>Fourth Route</h1>
  <router-link :to="{ name: 'childFourthRoute' }">ChildFourthRoute</router-link>
  <router-view></router-view>
</template>

<style scoped></style>
