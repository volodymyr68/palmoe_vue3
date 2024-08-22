<script>
export default {
  name: "SimpleSlot"
}
</script>

<template>
  <div class="task">
    <h1>Slot example</h1>
    <slot></slot>
  </div>
</template>

<style scoped>
.task{
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 5px;
  text-align: center;
  font-family: Arial, sans-serif;
  border: 1px solid red;
  color: #333;
}

</style>