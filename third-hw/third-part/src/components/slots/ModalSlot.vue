<script>
export default {
  name: "ModalSlot",
  data() {
    return {
      headerContent: null,
      footerContent: null,
      mainContent: null,
    };
  },
};
</script>

<template>
  <div class="modal">
    <slot name="header">
      <label>
        <input type="text" v-model="$parent.headerContent">
        Enter the header content
      </label>
    </slot>
    <slot name="main">
      <label>
        <input type="text" v-model="$parent.mainContent">
        Enter the main content
      </label>
    </slot>
    <slot name="footer">
      <label>
        <input type="text" v-model="$parent.footerContent">
        Enter the footer content
      </label>
    </slot>
  </div>
</template>

<style scoped>
.modal {
  display: flex;
  flex-direction: column;
}
</style>