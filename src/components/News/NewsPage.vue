<template>
  <div class="newsWrapper">
    <NewsCardsList :news="news.value"/>
  </div>
</template>

<script>
import {ref} from "vue";
import ModalWindow from "@/components/UI/ModalWindow.vue";
import NewsCardsList from "./components/newsCardsList/NewsCardsList.vue";

export default {
  name: "NewsPage",
  components: {NewsCardsList, ModalWindow},
  computed: {
    news: () => news,
  },
  mounted() {
    this.$load(async () => {
      const {data: newsData} = await this.$api.news.getNews()
      news.value = newsData;
    })
  }
}

const news = ref([]);

</script>

<style scoped>
.newsWrapper {
  margin-bottom: 10px;
}
</style>