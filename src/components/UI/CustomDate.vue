<template>
  <input
      class="date"
      type="datetime-local"
      @change="$emit('update:modelValue',$event.target.value)">
</template>

<script>
export default {
  name: "CustomDate"
}
</script>

<style scoped>
.date{

}


</style>