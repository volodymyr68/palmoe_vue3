<script>
export default {
  name: "ThemeToggleComponent"
}
</script>

<template>
  <button @click="$emit('theme-change')">Toggle Theme</button>
</template>

<style scoped>

</style>