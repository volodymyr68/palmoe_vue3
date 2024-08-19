<template>
  <div>
    <button @click="currentClickHandler">Click Me</button>
    <button @click="toggleHandler">Toggle Handler</button>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHandlerOne: true,
      message: "Click the button to see the action",
    };
  },
  computed: {
    currentClickHandler() {
      return this.isHandlerOne ? this.handleClickOne : this.handleClickTwo;
    },
  },
  methods: {
    handleClickOne() {
      this.message = "Handler One was called!";
    },
    handleClickTwo() {
      this.message = "Handler Two was called!";
    },
    toggleHandler() {
      this.isHandlerOne = !this.isHandlerOne;
    }
  },
};
</script>