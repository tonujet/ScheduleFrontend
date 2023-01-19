<template>
  <div class="update__raw">
    <EntityCellField
      :field="option.name"
    />
    <EntityCellField
        :type="option.inputType"
        :field="currField"
    />
    <EntityCellComponent
        @setItemField="setItemField"
        :comp-name="option.inputType"
        :startValue="currField"
        :values="values"
    />
  </div>
</template>

<script>
import EntityCellField from "@/components/Entity/EntityCRUD/EntityCellField.vue";
import EntityCellComponent from "@/components/Entity/EntityCRUD/EntityCellComponent.vue";

export default {
  name: "EntityUpdateRaw",
  components: {
    EntityCellComponent,
    EntityCellField
  },
  props: {
    option: [Object],
    currField: [String, Number, Boolean]
  },
  methods:{
    setItemField(value) {
      this.$emit("setItemField", [this.option.name, value])
    },
    fetchDataSource(){
      if(this.option.dataSource){
        this.$load(async() =>{
          this.values = (await this.$api.entity.getEntities(this.option.dataSource)).data
          console.log(this.values)
        })
      }
    }
  },
  mounted() {
    this.fetchDataSource();
  },
  data(){
    return{
      values:[]
    }
  },

}
</script>

<style scoped>
.update__raw {
  margin-bottom: 20px;
}
</style>