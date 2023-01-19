<template>
  <div class="newsCardWrapper">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <p>{{ text }}</p>
    <p>{{ dateCreated }}</p>
  </div>
</template>

<script>
export default {
  name: "newsCard",
  props: {
    id: Number,
    title: String,
    description: String,
    text: String,
    dateCreated: String
  }
}
</script>

<style scoped>

.newsCardWrapper {
  height: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  text-align: center;
  background: orange;
  padding: 20px;
}

</style>