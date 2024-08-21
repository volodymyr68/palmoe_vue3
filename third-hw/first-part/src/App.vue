<template>
  <div class="app">
    <Task1 />
    <Task10 />
    <Task11 />
    <Task12 />
    <Task13 />
    <Task14 />
    <Task15 />
    <Task16 />
  </div>
</template>

<script>

import Task1 from "@/components/main-components/Task1.vue";
import Task10 from "@/components/main-components/Task10.vue";
import Task11 from "@/components/main-components/Task11.vue";
import Task12 from "@/components/main-components/Task12.vue";
import Task13 from "@/components/main-components/Task13.vue";
import Task14 from "@/components/main-components/Task14.vue";
import Task15 from "@/components/main-components/Task15.vue";
import Task16 from "@/components/main-components/Task16.vue";

export default {
  name: "App",
  components: {
    Task1,
    Task10,
    Task11,
    Task12,
    Task13,
    Task14,
    Task15,
    Task16,
  },
};
</script>

<style>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>