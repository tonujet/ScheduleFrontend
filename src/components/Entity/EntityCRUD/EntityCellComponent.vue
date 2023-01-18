<template>
  <div class="cell__component" v-if="compName === 'text'">
    <CustomInput
        v-model="value"
    />
  </div>
  <div class="cell__component" v-else-if="compName === 'data'">
    <CustomSelect
        v-model="value"
    />
  </div>
  <div class="cell__component" v-else-if="compName === 'selectWeekDays'">
    <CustomSelect
        v-model="value"
    />
  </div>
  <div class="cell__component" v-else-if="compName === 'email'">
    <CustomInput
        v-model="value"
    />
  </div>
  <div class="cell__component" v-else-if="compName === 'phone'">
    <CustomInput
        v-model="value"
    />
  </div>
  <div class="cell__component" v-else-if="compName === 'textarea'">
    <CustomInput
        v-model="value"
    />
  </div>
  <div class="cell__component" v-else-if="compName === 'date'">
    <CustomDate
        v-model="value"
    />
  </div>
</template>

<script>
export default {
  name: "EntityCellComponent",
  props: {
    compName: [String],
    startValue:[String, Number, Date, Boolean]
  },
  data(){
    return{
      value:this.startValue
    }
  }
}
</script>

<style scoped>

</style>