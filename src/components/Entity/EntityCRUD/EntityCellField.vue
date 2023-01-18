<template>
 <div class="cell__field" v-if="type === 'date'">
   <slot></slot>
 </div>
  <div class="cell__field" v-else>
    <slot></slot>
  </div>

</template>

<script>
export default {
  name: "EntityCellField",
  props:{
    type:[String]
  }
}
</script>

<style scoped>

</style>