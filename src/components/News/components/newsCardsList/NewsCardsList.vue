<template>
  <div class="newsListWrapper">
    <NewsCard v-for="{id,
    title,
    description,
    text,
    dateCreated} in news" :key="id" :title="title" :description="description" :text="text" :dateCreated="dateCreated"/>
  </div>
</template>

<script>
import NewsCard from "./components/NewsCard.vue";
export default {
  name: "NewsCardsList",
  components: {NewsCard},
  props: {
    news: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped>
.newsListWrapper {
  display: grid;
  grid-gap: 10px;
  word-break: break-word;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
</style>