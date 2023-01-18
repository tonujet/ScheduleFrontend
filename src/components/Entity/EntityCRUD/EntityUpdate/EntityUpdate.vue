<template>
<div class="entity__update">
  <EntityUpdateRaw
      v-for="option in options"
      :option="option"
      :currField="currItem[option.name]"
  />
  <button>Обновити</button>
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
      ))[localStorage.getItem("entityName")]
    }
  },
  props:{
    currItem:[Object]
  }
}
</script>

<style scoped>

</style>