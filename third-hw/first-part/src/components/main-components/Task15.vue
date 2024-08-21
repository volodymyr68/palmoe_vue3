<script>
import ToggleClass from "@/components/ToggleClass.vue";

export default {
  name: "Task15",
  components: {
    ToggleClass,
  },
  data() {
    return {
      currentClass: "",
    };
  },
};
</script>

<template>
  <div class="task">
    <div :class="currentClass">
      <p>15 Використовуйте v-model для динамічної зміни класів елемента на основі даних, введених користувачем.</p>
      <ToggleClass v-model="currentClass" :all-classes="['', 'purple', 'green']" />
    </div>
  </div>
</template>

<style scoped>
.purple {
  background-color: purple;
  color: white;
}

.green {
  background-color: green;
  color: white;
}
</style>