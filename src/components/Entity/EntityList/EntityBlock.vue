<template>
  <div
      class="entity-block"
      @click=""

  >
    {{ name }}
  </div>
</template>

<script>
export default {
  name: "EntityBlock",
  props: {
    name: {
      type: String,
      required: true,
    }
  }
}
</script>

<style scoped>
.entity-block {
  border: 2px solid black;
  padding: 10px 20px;
  font-size: 1.8rem;
  flex: 0 0 180px;
  text-align: center;
}
.entity-block:hover{
  background: blueviolet;
  cursor: pointer;
}
.entity-block:active{
  background: red;
}
</style>