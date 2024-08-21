<script>
import CustomInput from "@/components/CustomInput.vue";

export default {
  name: "Task10",
  components: {
    CustomInput,
  },
  data() {
    return {
      form: {
        firstName: "",
      },
    };
  },
};
</script>

<template>
  <div class="task">
    <p>10 Реалізуйте компонент, який використовує v-model для налаштування власного введення даних.</p>
    <CustomInput v-model="form.firstName" />
    <p>{{ form }}</p>
  </div>
</template>

<style scoped>
/* Add any task-specific styles here */
</style>