<template>
  <div
      v-if="cols"
      class="header">
    <div
        v-for="col in cols">
      {{col}}
    </div>
  </div>
</template>

<script>
export default {
  name: "EntityItemHeader",
  props:{
    cols:{
      required:true,
    }
  }
}
</script>

<style scoped>
.header{
  border: 2px solid black;
}
</style>