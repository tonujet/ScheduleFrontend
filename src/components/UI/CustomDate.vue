<template>
  <input
      class="date"
      type="datetime-local"
      :value="modelValue && new Date(modelValue).toISOString().slice(0, 16)"
      @change="$emit('update:modelValue',$event.target.value)">
</template>

<script>
export default {
  name: "CustomDate",
  props:{
    modelValue:[String, Number, Date]
  }
}
</script>

<style scoped>
.date{

}


</style>