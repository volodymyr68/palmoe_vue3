<script>
export default {
  name: "CounterButtons",
  props: {
    modelValue: Number,
  },
  emits: ["update:modelValue"],
  methods: {
    increment() {
      this.$emit("update:modelValue", this.modelValue + 1);
    },
    decrement() {
      this.$emit("update:modelValue", this.modelValue - 1);
    },
  },
};
</script>

<template>
  <button @click="increment">Increment</button>
  <button @click="decrement">Decrement</button>
</template>

<style scoped></style>
