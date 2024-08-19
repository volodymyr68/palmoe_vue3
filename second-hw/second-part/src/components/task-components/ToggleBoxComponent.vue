<template>
  <div>
    <button @click="togglePosition">Toggle Position</button>
    <div :class="['box', { moved: isMoved }]"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMoved: false,
    };
  },
  methods: {
    togglePosition() {
      this.isMoved = !this.isMoved;
    },
  },
};
</script>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  background-color: lightblue;
  transition: all 0.5s ease;
}

.moved {
  transform: translateX(40px) translateY(-20px);
  background-color: coral;
  width: 150px;
  height: 150px;
}
</style>