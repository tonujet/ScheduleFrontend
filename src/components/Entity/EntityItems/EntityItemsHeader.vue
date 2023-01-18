<template>
  <div
      v-if="cols"
      class="header">
    <div class="header__colList">
      <EntityField
          v-for="col in cols"
          :value="col"
      />
    </div>
    <div class="header__icons">
      <fa
          class="item__icon"
          :icon="['fas','circle-plus']"
          size="3x"
          style="color: green"
          @click="this.isActiveCreationWindow = true"
      />
    </div>
    <ModalWindow
        v-model:isActive="isActiveCreationWindow"
    >
      asdasd
    </ModalWindow>
  </div>
</template>

<script>
import EntityField from "@/components/Entity/EntityList/EntityField.vue";
export default {
  name: "EntityItemHeader",
  components: {
    EntityField
  },

  props:{
    cols:{
      required:true,
    }
  },
  data(){
    return{
      isActiveCreationWindow:false
    }
  }
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

</style>