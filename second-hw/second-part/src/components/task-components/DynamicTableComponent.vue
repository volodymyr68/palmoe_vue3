<template>
  <div>
    <input type="number" v-model.number="rows" placeholder="rows" />
    <input type="number" v-model.number="cols" placeholder="columns" />
    <table border="1">
      <tr v-for="row in rows" :key="row">
        <td v-for="col in cols" :key="col">
          Cell {{ (row - 1) * cols + col }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rows: 2,
      cols: 2,
    };
  },
};
</script>