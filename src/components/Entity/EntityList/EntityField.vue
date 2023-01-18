<template>
  <div
      class="field"
      v-if="this.value"
  >
    {{this.value}}
  </div>
</template>

<script>
export default {
  name: "EntityField",
  props:{
    value:{
      type:String,
      required:true,
    }
  }
}
</script>

<style scoped>
  .field{
    flex: 1 1 200px;
    border-left: 3px solid red;
    margin: 5px;
    padding: 5px;
  }
</style>