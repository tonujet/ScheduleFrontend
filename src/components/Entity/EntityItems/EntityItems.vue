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
    name:{
      type: String,
      required: true
    }
  },
  computed:{
    cols(){
      if(this.name){
        const cols = []
        JSON.parse(localStorage.getItem("options"))
            [this.name]
            .forEach(item =>{
          cols.push(item.name)
        })
        return cols
      }

    }
  }
}
</script>

<style scoped>
  .items{
    padding: 0 20px;
  }
</style>