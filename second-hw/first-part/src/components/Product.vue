<script>
export default {
  name: "Product",
  data(){
    return{
      show:false
    };
  },
  props:{
    product:{
      type:Object,
      required:true,
    }
  }
}
</script>

<template>
      <v-col>
        <v-sheet class="pa-2 ma-2">
            <v-img :src="product.image"
                   height="200px"
                   width="200px"
                   lazy-load
                   >
            </v-img>
            <v-card-title>
              {{product.title}}
            </v-card-title>
            <v-card-subtitle>
              {{product.category}}
            </v-card-subtitle>
            <v-card-actions>
              <v-btn
                  color="pink-lighten-3"
              >
                To Bucket
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn
                  color="purple-darken-1"
                  @click="this.show = !this.show"
              >
                More
              </v-btn>
            </v-card-actions>
            <v-alert
                v-if="show"
            >
              {{product.description}}
            </v-alert>
        </v-sheet>
      </v-col>
</template>

<style scoped>
  .test{
    border: 3px solid black;
  }
</style>