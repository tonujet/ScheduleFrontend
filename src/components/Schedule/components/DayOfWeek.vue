<template>
  <div class="lessonsWrapper">
    <p>{{ dayOfWeek }}</p>
    <Lesson v-for="{id, name,
    dayOfWeek,
    time,
    classroom,
    teacher,
    discipline,
    group} in sortedLessons" :key="id" :name="name" :dayOfWeek="dayOfWeek" :time="time" :classroom="classroom"
            :teacher="teacher" :discipline="discipline" :group="group"/>
  </div>
</template>

<script>
import Lesson from "./components/Lesson.vue";

export default {
  name: "DayOfWeek",
  components: {Lesson},
  computed: {
    sortedLessons() {
      return [...this.lessons].sort((a, b) => a.time.charCode - b.time.charCode)
    }
  },
  props: {
    dayOfWeek: String,
    lessons: Array,
  }
}
</script>

<style scoped>

.lessonsWrapper {
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: start;
  align-items: center;
  background: orange;
  border-radius: 10px;
  margin: 10px;
  padding-top: 10px;
}

</style>