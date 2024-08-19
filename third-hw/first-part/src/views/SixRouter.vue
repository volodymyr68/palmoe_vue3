<script>
export default {
  name: "SixRouter",
  data() {
    return {
      pass: localStorage.getItem("pass"),
    };
  },
};
</script>

<template>
  <h1>Six Router</h1>
  <p>Your pass is {{ pass }}</p>
</template>

<style scoped></style>
