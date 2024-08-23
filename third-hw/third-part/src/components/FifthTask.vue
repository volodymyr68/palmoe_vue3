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
  <div class="container">
    <header>{{ headerContent }}</header>
    <main>
      {{ mainContent }}
      <button @click="isVisible = !isVisible">Toggle Visibility</button>
      <ModalSlot v-if="isVisible" :class="isVisible?'modalPosition':''"></ModalSlot>
    </main>
    <footer>{{ footerContent }}</footer>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
}

header, footer {
  width: 100%;
  text-align: center;
  padding: 10px;
  border-radius: 4px;
}

main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: black;
}

button {
  margin-top: 20px;
}

.modalPosition{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  border: 1px solid white;
}

</style>