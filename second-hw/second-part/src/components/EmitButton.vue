<script>
export default {
  name: "EmitButton"
}
</script>

<template>
  <button @click="$emit('child-click')">Click child</button>
</template>

<style scoped></style>
