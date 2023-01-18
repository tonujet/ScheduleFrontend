<template>
  <textarea
      class="textarea"
      name=""
      id=""
      @input="$emit('update:modelValue', $event.target.value)"
      :value="modelValue"
      placeholder="text"
  >

  </textarea>
</template>

<script>
export default {
  name: "CustomTextarea",
  props:{
    modelValue:[String,Number,Boolean]
  }
}
</script>


<style scoped>
.textarea {
  resize: none;
  border-radius: 5px;
}
</style>