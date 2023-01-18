<template>
  <div
      class="field"
      v-if="this.value && typeof this.value === 'object'"
  >
    {{ this.value.name }}
  </div>
  <div
      class="field"
      v-else-if="this.value"
  >
    {{ this.value }}
  </div>
  <div
      v-else
      class="field"
  >

    Пусто
  </div>
</template>

<script>
export default {
  name: "EntityField",
  props: {
    value: {
      required: true,
    }
  }
}
</script>

<style scoped>
.field {
  flex: 1 1 200px;
  border-left: 3px solid red;
  margin: 5px;
  padding: 5px;
}
</style>