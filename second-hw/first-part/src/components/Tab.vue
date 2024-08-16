<script>


export default {
  name:"Tab",
  data(){
    return {
      theme:false
    }
  },
}
</script>

<template>
  <p>{{theme}}</p>
  <v-btn name="change" @click="this.theme = !this.theme" text="change" />
</template>

<style scoped></style>
