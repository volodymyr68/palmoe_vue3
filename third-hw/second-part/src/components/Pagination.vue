<script>
import {mapActions, mapGetters, mapState} from "pinia";
import {usePlaceholderStore} from "@/stores/PlaceholderStore.js";

export default {
  name: "Pagination",
  computed:{
    ...mapState(usePlaceholderStore,["placeholderStore"]),
    ...mapGetters(usePlaceholderStore,["getAllPlaceholders","getNext","getPrev","getCurrentPage","getTotalPages"])
  },
  methods:{
    ...mapActions(usePlaceholderStore,["fetchRecords","nextPage","prevPage","setDefaultData","fetchByPage"])
  },
  created() {
    this.setDefaultData();
    this.fetchRecords();
  }
}
</script>

<template>
  <v-container class="main">
      <v-card v-for="item in getAllPlaceholders"
      :key="item.id"
      >
        <v-card-title>{{item.title}}</v-card-title>
        <v-card-text>{{item.body}}</v-card-text>
      </v-card>
    <v-container class="container">
      <v-btn :disabled="!getPrev"
              @click="prevPage"
      >
        Prev</v-btn>
      <v-btn v-for="page in getTotalPages"
             :key="page"
             :disabled="getCurrentPage===page"
             @click="fetchByPage(page)"
      >{{page}}</v-btn>
      <v-btn :disabled="!getNext"
             @click="nextPage"
      >
        Next</v-btn>
    </v-container>
  </v-container>
</template>

<style scoped>
  .main{
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  }
  .container{
    display: flex;
    flex-direction: row;
    column-gap: 20px;
  }
</style>