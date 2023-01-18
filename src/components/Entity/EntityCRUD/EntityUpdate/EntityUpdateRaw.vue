<template>
  <div class="update__raw">
    <EntityCellField>
        s
    </EntityCellField>
    <EntityCellField>
        s
    </EntityCellField>
    <EntityCellComponent/>
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
  props:{
    option:[Object],
    currField:[String, Number, Boolean]
  }

}
</script>

<style scoped>

</style>