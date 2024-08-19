<script>
export default {
  name: "CustomInput",
  props: {
    modelValue: String,
  },
  emits: ["update:modelValue"],
};
</script>

<template>
  <div>
    <input
        type="text"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<style scoped></style>
