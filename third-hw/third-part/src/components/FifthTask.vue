<script>
import ModalSlot from "@/components/slots/ModalSlot.vue";

export default {
  name: "FifthTask",
  components: { ModalSlot },
  data() {
    return {
      headerContent: "Initial Header Content",
      mainContent: "Initial Main Content",
      footerContent: "Initial Footer Content",
      isVisible: false,
    };
  },
};
</script>

<template>
  <header>{{ headerContent }}</header>
  <main>
    {{ mainContent }}
    <button @click="isVisible = !isVisible">Toggle Visibility</button>
    <ModalSlot v-if="isVisible">
    </ModalSlot>
  </main>
  <footer>{{ footerContent }}</footer>
</template>

<style scoped>
</style>