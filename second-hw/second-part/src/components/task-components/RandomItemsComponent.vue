<template>
  <ul>
    <li v-for="(item, index) in items" :key="index" :style="item.style">
      {{ item.text }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.generateItems();
  },
  methods: {
    generateItems() {
      const numberOfItems = 10;
      for (let i = 0; i < numberOfItems; i++) {
        this.items.push({
          text: `Item ${i + 1}`,
          style: {
            backgroundColor: this.getRandomColor(),
            fontSize: `${this.getRandomFontSize()}px`
          }
        });
      }
    },
    getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },
    getRandomFontSize() {
      const minSize = 14;
      const maxSize = 30;
      return Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
    }
  }
};
</script>