<template>
<div class="entity-list">
  <EntityBlock
      v-for="(value, key) in options"
      :name="key"
  />
</div>
</template>

<script>
import EntityBlock from "@/components/Entity/EntityList/EntityBlock.vue";
export default {
  name: "EntityList",
  components: {
    EntityBlock
  },
  created() {
    // this.options = localStorage.getItem("options,")
    // console.log(localStorage.getItem("options"))
  },
  data(){
    return{
      options:JSON.parse(localStorage.getItem("options"))
    }
  }
}
</script>

<style scoped>
  .entity-list{
    display: flex;
    justify-content: space-evenly;
  }
</style>