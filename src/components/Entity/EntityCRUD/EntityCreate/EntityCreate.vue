<template>
<div class="entity__create">
  <EntityCreateRaw
      v-for="option in options[name]"
      :fieldOption="option"
      @setItemField="setItemField"
  />
  <button @click="createItem">Створити</button>
</div>
</template>

<script>
import EntityCreateRaw from "@/components/Entity/EntityCRUD/EntityCreate/EntityCreateRaw.vue";
export default {
  name: "EntityCreate",
  components:{
    EntityCreateRaw
  },
  data(){
    return{
      options:JSON.parse(localStorage.getItem("options")),
      item:{},
      name:localStorage.getItem("entityName")
    }
  },
  methods:{
    uploadItem(){
      this.$load(async() =>{
        await this.$api.entity.createEntity(this.name, this.item)
        this.fetchItems(localStorage.getItem("entityName"));
      })
    },
    setItemField(arr){
      this.item[arr[0]] = arr[1]
    },
    createItem(){
      this.uploadItem()
      this.item = {}
      this.$emit("closeWindow")
    }
  },
  props:{
    fetchItems:{
      type:Function,
      required:true,
    }
  }

}
</script>

<style scoped>

</style>