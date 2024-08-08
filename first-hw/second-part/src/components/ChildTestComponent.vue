<script>
export default {
  name:"ChildTestComponent",
  data(){
    return{
      message:this.message
    }
  },
  props:{
    message:{
      type:String,
      required:true,
      default:"old message"
    }
  }
}
</script>

<template>
  <p>{{message}}</p>
</template>

<style scoped></style>
