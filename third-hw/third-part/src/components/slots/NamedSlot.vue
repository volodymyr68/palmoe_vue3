<script>
export default {
  name: "NamedSlot"
}
</script>

<template>
  <div class="task">
    <slot name="header"></slot>
    <slot>Default main text</slot>
    <slot name="footer"></slot>
  </div>
</template>

<style scoped>
.task{
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  border: 1px solid red;
}
</style>