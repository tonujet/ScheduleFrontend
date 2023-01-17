<template>
  <div class="item">
    <div> {{item.title}}</div>
  </div>
</template>

<script>
export default {
  name: "EntityItem",
  props:{
    item:{
      type:Object,
      required:true,
    }
  }
}
</script>

<style scoped>

</style>