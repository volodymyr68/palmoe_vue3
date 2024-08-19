<script>
export default {
  name: "SelectComponent",
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
  <div class="form-group">
    <v-select
        @change="updateClass"
        v-model="internalValue"
        label="Select country"
        :items="allClasses"
    >
    </v-select>
  </div>
</template>

<style scoped></style>
