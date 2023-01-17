<template>
  <div class="items">
    <EntityItem
        v-for="value in items"
        :item=value
    />
  </div>
</template>

<script>
import EntityItem from "@/components/Entity/EntityItems/EntityItem.vue";

export default {
  name: "EntityItems",
  components: {
    EntityItem
  },
  props:{
    items:{
      type:Array,
      required:true
    }
  }
}
</script>

<style scoped>

</style>