<template>
  <div class="item">
    <div class="item__fields">
      <EntityField
          v-for="(value, key, index) in item"
          :value="index !== 0 ? value : null"
      />
    </div>
    <div class="item__icons">
      <fa
          class="item__icon"
          :icon="['fas','trash-can']"
          size="3x"
          style="color: red"/>
      <fa
          class="item__icon"
          :icon="['fas','pen-nib']"
          size="3x"
          style="color: blue"
      />
    </div>
  </div>
</template>

<script>
import EntityField from "@/components/Entity/EntityList/EntityField.vue";

export default {
  name: "EntityItem",
  components: {
    EntityField
  },

  props: {
    item: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.item {
  border: 2px solid red;
  margin-bottom: 20px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item__fields{
  flex: 1 1 auto;
  display: flex;
}
.item__icons{
  margin-left: 20px;
}
.item__icon{
  margin-left: 15px;
  cursor: pointer;
}

</style>