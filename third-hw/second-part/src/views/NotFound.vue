<script>
export default {
  name: "NotFound",
  props:{
    name:{
      type:String,
      required:false
    },
    access:{
      type:Boolean,
      required: false
    }
  },
  mounted() {
    console.log("User Store Name:", this.name);
    console.log("User Store Access:", this.access);
  }
}
</script>

<template>
  <div v-if="!access && name">
    <div>Dear, {{ name }}</div>
    <div>You need to auth to reach this page</div>
  </div>
  <div v-else>
    <span>404 Page not found</span>
  </div>
</template>

<style scoped>

</style>