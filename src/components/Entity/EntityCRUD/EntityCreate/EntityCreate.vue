<template>
<div class="entity__create">
  <EntityCreateRaw
      v-for="option in options[name]"
      :fieldOption="option"
  />
  <button>Створити</button>
</div>
</template>

<script>
import EntityCreateRaw from "@/components/Entity/EntityCRUD/EntityCreate/EntityCreateRaw.vue";
export default {
  name: "EntityCreate",
  components:{
    EntityCreateRaw
  },
  data(){
    return{
      options:JSON.parse(localStorage.getItem("options"))
    }
  },
  props:{
    name:{
      type:String,
      required:true
    },
  },
  methods:{
  },
  computed:{

  }

}
</script>

<style scoped>

</style>