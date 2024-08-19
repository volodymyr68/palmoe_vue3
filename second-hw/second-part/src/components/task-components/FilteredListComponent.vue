<template>
  <div>
    <label for="sortInput">Enter id</label>
    <input type="text" id="sortInput" @input="objectId = Number($event.target.value)" />
    <ObjectListComponent :object-list="filteredList" />
  </div>
</template>

<script>
import ObjectListComponent from "@/components/ObjectListComponent.vue";

export default {
  components: { ObjectListComponent },
  data() {
    return {
      objectId: 1,
    };
  },
  props:{
    objectList:{
      type: Array,
      required: true,
    }
  },
  computed: {
    filteredList() {
      return this.objectList.filter(item => item.id === this.objectId);
    },
  },
};
</script>

