<script>
import ToggleComponent from "@/components/ToggleComponent.vue";

export default {
  name: "Task14",
  components: {
    ToggleComponent,
  },
  data() {
    return {
      isToggle: false,
    };
  },
};
</script>

<template>
  <div class="task">
    <p>14 Створіть компонент перемикача (toggle), який використовує v-model. Компонент повинен міняти свій стан та виводити різні значення в залежності від свого стану.</p>
    <button @click="isToggle = !isToggle">Toggle outside component</button>
    <ToggleComponent v-model:is-toggle="isToggle" />
  </div>
</template>

<style scoped>
</style>