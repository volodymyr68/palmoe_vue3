<script>
export default {
  name: "Pagination",
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 2
    },
    data: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      internalCurrentPage: this.currentPage, // створюємо локальну копію currentPage
      currentPageData: []
    };
  },
  watch: {
    internalCurrentPage: 'updateCurrentPageData', // слухаємо зміни internalCurrentPage
    data: 'updateCurrentPageData'
  },
  methods: {
    updateCurrentPageData() {
      const start = (this.internalCurrentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      this.currentPageData = this.data.slice(start, end);
    },
    pagination(move) {
      if (move && this.internalCurrentPage < this.totalPages) {
        this.internalCurrentPage++;
      } else if (!move && this.internalCurrentPage > 1) {
        this.internalCurrentPage--;
      }
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.data.length / this.pageSize);
    }
  },
  created() {
    this.updateCurrentPageData();
  }
}
</script>

<template>
  <div v-if="currentPageData.length && data.length">
    <ul>
      <li v-for="item in currentPageData" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
  <div v-else>No data available</div>
  <div>
    <button @click="pagination(false)" :disabled="internalCurrentPage === 1">
      Prev
    </button>
    <span>Current page number: {{ internalCurrentPage }}</span>
    <button
        @click="pagination(true)"
        :disabled="internalCurrentPage === totalPages"
    >
      Next
    </button>
  </div>
</template>

<style scoped>
button {
  margin: 5px;
}
</style>
