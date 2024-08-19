<template>
  <div>
    <p>Time list {{ timeList }}</p>
    <EmitButton v-for="n in 10" :key="n" @child-click="saveClickTime" />
  </div>
</template>

<script>
import EmitButton from "@/components/EmitButton.vue";

export default {
  components: { EmitButton },
  data() {
    return {
      timeList: [],
    };
  },
  methods: {
    saveClickTime() {
      const currentTime = new Date().toLocaleTimeString();
      this.timeList.push(currentTime);
    },
  },
};
</script>