<template>
  <div class="modalWindow" v-if="isOpen">
    <div class="modalWindow__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalWindow",
  props:{
    isOpen:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style scoped>
.modalWindow{
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0 , 0.8);
  display: flex;
  position: fixed;
}
.modalWindow__content{
  position: relative;
  background: white;
  height: 300px;
  width: 300px;
}
</style>