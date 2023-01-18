<template>
  <div class="cell__component" v-if="compName === 'text'">
    <CustomInput/>
  </div>
  <div class="cell__component" v-else-if="compName === 'data'">
    <CustomSelect/>
  </div>
  <div class="cell__component" v-else-if="compName === 'selectWeekDays'">
    <CustomSelect/>
  </div>
  <div class="cell__component" v-else-if="compName === 'email'">
    <CustomInput/>
  </div>
  <div class="cell__component" v-else-if="compName === 'phone'">
    <CustomInput/>
  </div>
  <div class="cell__component" v-else-if="compName === 'textarea'">
    <CustomInput/>
  </div>
  <div class="cell__component" v-else-if="compName === 'date'">
    <CustomDate/>
  </div>
</template>

<script>
export default {
  name: "EntityCellComponent",
  props: {
    compName: [String],
  }
}
</script>

<style scoped>

</style>