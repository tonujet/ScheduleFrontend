<template>
  <div
      v-if="cols"
      class="header">
    <div class="header__colList">
      <EntityField
          v-for="col in cols"
          :value="col"
          :key="col"
      />
    </div>
    <div class="header__icons">
      <fa
          class="header__icon"
          :icon="['fas','circle-plus']"
          size="3x"
          style="color: green"
          @click="this.isActiveCreationWindow = true"
      />
    </div>
  </div>
  <ModalWindow
    v-model:isActive="isActiveCreationWindow"
  >
    <EntityCreate
        @closeWindow="this.isActiveCreationWindow = false"
        :fetchItems="fetchItems"
    />
  </ModalWindow>
</template>

<script>
import EntityField from "@/components/Entity/EntityItems/EntityField.vue";
import EntityCreate from "@/components/Entity/EntityCRUD/EntityCreate/EntityCreate.vue";
export default {
  name: "EntityItemHeader",
  components: {
    EntityField, EntityCreate
  },

  props:{
    cols:{
      required:true,
    },
    fetchItems:{
      type:Function,
      required: true,
    }
  },
  data(){
    return{
      isActiveCreationWindow:false,
      name:localStorage.getItem("entityName")
    }
  },
}
</script>

<style scoped>
.header{
  border: 2px solid black;
  margin-bottom: 20px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem ;
}
.header__colList{
  flex: 1 1 auto;
  display: flex;
}
.header__icons{
  margin-left: 73px;
}
.header__icon{
  cursor: pointer;
}

</style>