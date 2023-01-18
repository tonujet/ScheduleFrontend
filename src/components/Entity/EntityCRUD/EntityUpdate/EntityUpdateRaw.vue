<template>
  <div class="update__raw">
    <EntityCellField>
      {{ option.name }}
    </EntityCellField>
    <EntityCellField
        :type="option.inputType"
    >
      {{ currField }}
    </EntityCellField>
    <EntityCellComponent
        :comp-name="option.inputType"
        :startValue="currField"
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
  }

}
</script>

<style scoped>
.update__raw {
  margin-bottom: 20px;
}
</style>