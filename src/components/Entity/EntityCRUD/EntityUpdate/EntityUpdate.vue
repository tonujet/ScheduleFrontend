<template>
<div class="entity__update">
  <EntityUpdateRaw
      v-for="option in options"
      :option="option"
      :currField="currItem[option.name]"
      @setItemField="setItemField"
  />
  <button @click="updateItem">Обновити</button>
</div>
</template>

<script>
import EntityUpdateRaw from "@/components/Entity/EntityCRUD/EntityUpdate/EntityUpdateRaw.vue";
export default {
  name: "EntityUpdate",
  components: {EntityUpdateRaw},
  data(){
    return{
      options:JSON.parse(localStorage.getItem(
          "options"
      ))[localStorage.getItem("entityName")],
      item:{...this.currItem}
    }
  },
  props:{
    currItem:[Object],
    fetchItems:{
      type:Function,
      required:true,
    }
  },
  methods:{
    uploadItem(){
      this.$load(async() =>{
        await this.$api.entity.updateEntity(
            localStorage.getItem("entityName"), this.item
        )
        this.fetchItems(localStorage.getItem("entityName"))
      })
    },
    updateItem(){
      this.uploadItem()
      this.$emit("closeWindow")
    },
    setItemField(arr){
      this.item[arr[0]] = arr[1]
    },
  },

}
</script>

<style scoped>

</style>