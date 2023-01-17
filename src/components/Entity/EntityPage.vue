<template>
<div class="entity">
    <EntityList/>
    <EntityItems/>
</div>
</template>

<script>
import EntityList from "@/components/Entity/EntityList/EntityList.vue";
import EntityItems from "@/components/Entity/EntityItems/EntityItems.vue";
export default {
  name: "EntityPage",
  components: {
    EntityList,
    EntityItems
  }

}
</script>

<style scoped>

</style>