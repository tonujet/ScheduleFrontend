<template>
  <div class="entity">
    <EntityList
        @setEntityName="setEntityName"
    />
    <EntityItems
        v-if="name"
        :items="items"
        :name="name"
        @fetch="fetchItems(name)"
        @deleteItem="deleteItem"
    />
    <div
      v-else
    >
      Пусто
    </div>
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
  },
  mounted() {
    const name = localStorage.getItem("entityName");
    if (name) {
      this.name = name
    }
  },
  data() {
    return {
      name: null,
      items: [],
    }
  },
  methods: {
    setEntityName(name) {
      localStorage.setItem("entityName", name)
      this.name = name
    },
    fetchItems(value){
      this.$load(async() =>{
        this.items = (await this.$api.entity.getEntities(value)).data
      })
    },
    deleteItem(id){
      this.items = this.items.filter(item => item.id !== id)
      this.$load(async() =>{
        await this.$api.entity.deleteEntity(this.name, id)
      })
    },
  },
  watch: {
    name(value) {
      this.fetchItems(value);
    }
  },
  computed: {
    items() {
      return [...this.items]
    },
  },

}
</script>

<style scoped>
.entity__list{
  margin-bottom: 30px;
}
</style>