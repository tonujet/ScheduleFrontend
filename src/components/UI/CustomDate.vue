<template>
  <input
      class="date"
      type="datetime-local"
      @change="$emit('update:modelValue',$event.target.value)">
</template>

<script>
export default {
  name: "DateInput"
}
</script>

<style scoped>
.date{

}


</style>