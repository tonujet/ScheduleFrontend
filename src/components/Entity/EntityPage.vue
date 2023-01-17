<template>
  <div class="entity">
    <EntityList
        @setEntityName="setEntityName"
    />
    <EntityItems
        :items="items"
    />
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
      items: null,
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
      if (value === "news") {
        this.items = news
      } else {
        this.items = []
      }
    }
  },
  computed: {
    items() {
      console.log(1)
      return [...this.items]
    }
  },

}
</script>

<style scoped>

</style>