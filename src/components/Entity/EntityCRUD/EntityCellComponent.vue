<template>
 <div class="cell__component" v-if="compName">
   <input type="text">
 </div>
</template>

<script>
export default {
  name: "EntityCellComponent",
  props:{
    compName:[String],
  }
}
</script>

<style scoped>

</style>