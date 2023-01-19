<template>
  <div class="create__raw">
    <EntityCellField
      :field="fieldOption.name"
    />
    <EntityCellComponent
        @setItemField="setItemField"
        :comp-name="fieldOption.inputType"
        :start-value="null"
        :values="values"
    />
  </div>
</template>

<script>
import EntityCellComponent from "@/components/Entity/EntityCRUD/EntityCellComponent.vue";
import EntityCellField from "@/components/Entity/EntityCRUD/EntityCellField.vue";

export default {
  name: "EntityCreateRaw",
  components: {
    EntityCellField,
    EntityCellComponent
  },
  props: {
    fieldOption: [Object]
  },
  methods:{
    setItemField(value) {
      this.$emit("setItemField", [this.fieldOption.name, value])
    },
    fetchDataSource(){
      if(this.fieldOption.dataSource){
        this.$load(async() =>{
          this.values = (await this.$api.entity.getEntities(this.fieldOption.dataSource)).data
          console.log(this.values)
        })
      }
    }
  },
  data(){
    return{
      values:[]
    }
  },
  mounted() {
    this.fetchDataSource();
  },
}
</script>

<style scoped>
  .create__raw{
    margin-bottom: 20px;
  }
</style>