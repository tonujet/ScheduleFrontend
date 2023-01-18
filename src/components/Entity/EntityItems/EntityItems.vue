<template>
  <div class="items">
    <EntityItemsHeader
        :cols="cols"
    />
    <EntityItem
        v-for="value in items"
        :item=value
        :key="value.id"
    />
  </div>
</template>

<script>
import EntityItem from "@/components/Entity/EntityItems/EntityItem.vue";
import EntityItemsHeader from "@/components/Entity/EntityItems/EntityItemsHeader.vue";

export default {
  name: "EntityItems",
  components: {
    EntityItem,
    EntityItemsHeader,
  },
  props: {
    items: {
      type: Array,
      required: true
    },
  },
  computed:{
    cols(){
        return this.items[0] && Object.keys(this.items[0]).slice(1)
    }
  }
}
</script>

<style scoped>
  .items{
    padding: 0 20px;
  }
</style>