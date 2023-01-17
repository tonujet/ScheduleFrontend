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
  .item{
    border: 2px solid red;
    margin: 20px;
    padding: 20px;
  }
</style>