<script>
import TestComponent from "@/components/TestComponent.vue";

export default {
  name: "App",
  components: { TestComponent },
  data() {
    return {
      theme: "dark"
    };
  },
  methods: {
    toggleTheme() {
      console.log("Toggling theme");
      this.theme = this.theme === "dark" ? "light" : "dark";
    }
  }
};
</script>

<template>
  <div :class="theme">
    <test-component @theme-change="toggleTheme" />
  </div>
</template>

<style scoped>
.light {
  background-color: white;
  color: black;
}
.dark {
  background-color: black;
  color: white;
}
</style>
