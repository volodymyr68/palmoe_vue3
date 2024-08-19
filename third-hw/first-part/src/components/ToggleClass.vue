<script>
export default {
  name: "ToggleClass",
  props: {
    modelValue: String,
    allClasses: {
      type: Array,
      required: true,
    },
  },
  emits: ["update:modelValue"],
  computed: {
    internalValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
  methods: {
    updateClass(event) {
      this.internalValue = event.target.value;
    },
  },
};
</script>

<template>
  <select @change="updateClass" v-model="internalValue">
    <option
        v-for="(currClass, classIndex) in allClasses"
        :key="classIndex"
        :value="currClass"
    >
      {{ currClass }}
    </option>
  </select>
</template>

<style scoped></style>
