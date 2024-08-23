<script>
export default {
  name: "PropsSlot",
  data(){
    return{
      items:["item1", "item2", "item3"]
    }
  }
}
</script>

<template>
  <slot name="props" :items="items"></slot>
</template>
