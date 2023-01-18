<template>
  <input
      type="text"
      class="input"
      :value="modelValue && modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      placeholder="Значення поля"
  >
</template>

<script>
export default {
  name: "CustomInput",
  props:{
    modelValue:[String, Number, Date]
  }
}
</script>

<style scoped>
  .input{
    padding: 10px 20px;
  }
</style>