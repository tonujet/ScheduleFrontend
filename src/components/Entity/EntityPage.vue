<template>
  <div class="entity">
    <EntityList
        @setEntityName="setEntityName"
    />
    <EntityItems
        v-if="name"
        :items="items"
        :name="name"
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
import news from "@/mocks/news";

export default {
  name: "EntityPage",
  components: {
    EntityList,
    EntityItems
  },
  created() {
    const name = localStorage.getItem("entityName")
    if (name) {
      this.name = name;
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
    }
  },
  watch: {
    name(value) {
      this.$load(async() =>{
        this.items = (await this.$api.entity.getEntities(value)).data
      })
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