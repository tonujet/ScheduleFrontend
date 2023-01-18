<template>
  <div v-if="type === 'data'">
    {{field ? field.name : "Пусто"}}
  </div>
  <div class="cell__field" v-else-if="type === 'date'">
    {{field}}
  </div>
  <div class="cell__field" v-else>
    {{field ? field : "Пусто"}}
  </div>
</template>

<script>
export default {
  name: "EntityCellField",
  props: {
    type: [String],
    field:[String, Object]
  }
}
</script>

<style scoped>

</style>