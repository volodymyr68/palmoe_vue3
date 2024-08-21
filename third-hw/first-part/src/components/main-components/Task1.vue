<script>
import Tab from "@/components/Tab.vue";
import Main from "@/components/Main.vue";

export default {
  name: "Task1",
  components: {
    Tab,
    Main,
  },
};
</script>

<template>
  <div class="task">
    <p>1) Налаштуйте базові маршрути для декількох компонентів у вашому додатку.</p>
    <Tab />
    <div class="border">
      <Main />
    </div>
  </div>
</template>

<style scoped>

</style>