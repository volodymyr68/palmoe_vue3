<template>
  <div>
    <Pagination
        :data="objectList"
        :total-pages="objectList.length!==0 ? Math.ceil(objectList.length / 2) : 1"
    />
  </div>
</template>

<script>
import Pagination from "@/components/Pagination.vue";

export default {
  components: { Pagination },
  props: ['objectList'],
};
</script>

<style scoped>

</style>