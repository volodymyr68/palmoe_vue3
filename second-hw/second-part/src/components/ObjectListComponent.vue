<script>
export default {
  name: "ObjectListComponent",
  props:{
    objectList:{
      type: Array,
      required: true,
    }
  },
}
</script>

<template>
  <div>
    {{objectList}}
    <h2>Object List</h2>
    <ul>
      <li v-for="item in objectList" :key="item.id">
        {{ item.id }} - {{ item.name }}
        <ul v-show="item.subItems">
          <li v-for="(subItem,subIndex) in item.subItems" :key="subIndex">
            {{subItem}}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
