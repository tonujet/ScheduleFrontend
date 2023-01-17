<template>
  <div class="lessonsWrapper">
    <p>{{dayOfWeek}}</p>
    <Lesson v-for="{id, name,
    dayOfWeek,
    time,
    classroom,
    teacher,
    discipline,
    group} in lessons" :key="id" :name="name" :dayOfWeek="dayOfWeek" :time="time" , :classroom="classroom"
            :teacher="teacher" :discipline="discipline" :group="group">
    </Lesson>
  </div>
</template>

<script>
import Lesson from "./components/Lesson.vue";

export default {
  name: "DayOfWeek",
  components: {Lesson},
  props: {
    dayOfWeek: String,
    lessons: Array,
  }
}
</script>

<style scoped>

.lessonsWrapper {

}

</style>