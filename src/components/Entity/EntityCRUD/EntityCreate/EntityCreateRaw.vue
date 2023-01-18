<template>
  <div class="create__raw">
    <EntityCellField>
      {{fieldOption.name}}
    </EntityCellField>
    <EntityCellComponent
        :comp-name="fieldOption.inputType"
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
  }
}
</script>

<style scoped>

</style>