<script>
export default {
  name: "ToggleComponent",
  props: {
    isToggle: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["update:isToggle"],
  methods: {
    toggle() {
      this.$emit("update:isToggle", !this.isToggle);
    },
  },
};
</script>

<template>
  <button @click="toggle">Toggle inside component</button>
  <div v-if="isToggle">
    <p>Toggle is active</p>
  </div>
  <div v-else>
    <p>Toggle is non active</p>
  </div>
</template>

<style scoped></style>
