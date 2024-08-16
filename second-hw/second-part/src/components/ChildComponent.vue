<script>
export default {
  name: "ChildComponent"
}
</script>

<template>
  <button @click="$emit('child-click')">Click child</button>
</template>

<style scoped></style>
