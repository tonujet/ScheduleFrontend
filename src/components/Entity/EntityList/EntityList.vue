<template>
<div class="entity__list">
  <EntityBlock
      v-for="(value, key) in options"
      :name="key"
      :key="key"
      @setEntityName="setEntityName"
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
  },
  data(){
    return{
      options:JSON.parse(localStorage.getItem("options"))
    }
  },
  methods:{
    setEntityName(name){
      this.$emit("setEntityName", name)
    }
  }
}
</script>

<style scoped>
  .entity__list{
    display: flex;
    justify-content: space-evenly;
  }
</style>