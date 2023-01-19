<template>
  <div class="cell__component" v-if="compName === 'text'">
    <CustomInput
        v-model="value"
    />
  </div>
  <div class="cell__component" v-else-if="compName === 'data'">
    <CustomSelect
        v-model="value"
        :options="values"
    />
  </div>
  <div class="cell__component" v-else-if="compName === 'selectWeekDays'">
    <CustomSelect
        v-model="value"
        :options="Object.keys(weekDays)"
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
        v-mask="'+38(0##) ###-##-##'"
        placeholder="+38(0__)___-__-__"
    />
  </div>
  <div class="cell__component" v-else-if="compName === 'textarea'">
    <CustomTextarea
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
import {mask} from 'vue-the-mask'
import CustomTextarea from "@/components/UI/CustomTextarea.vue";
import weekDays from "@/assets/constants/WeekDays";

export default {
  name: "EntityCellComponent",
  components: {CustomTextarea},
  directives:{
    mask
  },
  props: {
    compName: [String],
    startValue:[String, Number, Date, Boolean],
    values:[Array],
  },
  data(){
    return{
      value:this.startValue,
      weekDays:weekDays,
    }
  },
  watch:{
    value(value){
      this.$emit("setItemField", value)
    }
  },

}
</script>

<style scoped>

</style>