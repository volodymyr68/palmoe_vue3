<script>
import SelectComponent from "@/components/lastTask/SelectComponent.vue";
import usaFlag from '@/assets/usa.png';
import ukraineFlag from '@/assets/ukraine.png';
import germanyFlag from '@/assets/germany.png';
export default {
  name: "Task16",
  components: {
    SelectComponent,
  },
  data() {
    return {
      country: "",
    };
  },
};
</script>

<template>
  <div class="task">
    <p>16 Створити компонент "Select Component" з використанням v-model</p>
    <v-container>
      <SelectComponent
          v-model="country"
          :all-classes="['Ukraine', 'USA', 'Germany']"
      />
      <v-container>
        <v-container>
          <v-card-title>Current country : </v-card-title>
        </v-container>
        <v-container>
          <img
              v-if="country === 'USA'"
              src="../../assets/usa.png" height="163" width="310"
              alt="USA"/>


          <img
              v-else-if="country === 'Ukraine'"
              src="../../assets/ukraine.png" height="183" width="275"
              alt="UKRAINE"/>
          <img
              v-else-if="country === 'Germany'"
              src="../../assets/germany.png" height="174" width="290"
              alt="GERMANY"/>
          <v-card-subtitle v-else>No Country selected</v-card-subtitle>
        </v-container>
      </v-container>
    </v-container>
  </div>
</template>

<style scoped>

</style>