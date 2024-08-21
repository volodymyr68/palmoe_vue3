<script>
import SelectComponent from "@/components/lastTask/SelectComponent.vue";

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
          <v-img
              v-if="country === 'USA'"
              width="100px"
              height="50px"
              src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
          ></v-img>
          <v-img
              v-else-if="country === 'Ukraine'"
              width="100px"
              height="50px"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAM1BMVEUAVbj/2AD/3ACvpmv92igATb392A792hMWXLoOWLoAVbkOWbkDVrcWXLwAT74AS70AU7/4RaM+AAABh0lEQVR4nO3Sy1GFABREwev3IaCYf7TutOQEAIvuCKZOzWz7Pvza932ZbV2v3nEv6+dsbnKyzMfVE25Hk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk1pmu3rC7SzzdRxv/DmO73nhbJ45m/cn/ntoEpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJPeaVsx9OYXkiGzrl+QAAAABJRU5ErkJggg=="
          ></v-img>
          <v-img
              v-else-if="country === 'Germany'"
              width="100px"
              height="50px"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAElBMVEUAAAD/zgDdAADnAADaAAD/2AAtsSEoAAAA+ElEQVR4nO3QMQGAMAAEsYeCf8tIuI0pkZANAAAAAAAAAAAAAAAAAAAAgB8dwm6CoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKewh7CbsIipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUofMGTNC8HkSxoAAAAASUVORK5CYII="
          ></v-img>
          <v-card-subtitle v-else>No Country selected</v-card-subtitle>
        </v-container>
      </v-container>
    </v-container>
  </div>
</template>

<style scoped>
/* Add any task-specific styles here */
</style>