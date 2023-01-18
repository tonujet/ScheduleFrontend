<template>
  <div class="lessonsWrapper">
    <p>{{ dayOfWeek }}</p>
    <div v-for="timeUnit in time" class="unitWrapper">
      <p class="timeSeparator">
        time: {{timeUnit}}
      </p>
      <div class="unit">
        <Lesson v-if="lessons.map(lesson => lesson.time).includes(timeUnit)" :key="lessons.find(record => record.time === timeUnit).id" :lesson="lessons.find(record => record.time === timeUnit)"/>
        <div v-else class="scheduleRecordFiller"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Lesson from "./components/Lesson.vue";

export default {
  name: "DayOfWeek",
  components: {Lesson},
  computed: {
    time: () => time
  },
  props: {
    dayOfWeek: String,
    lessons: Array,
  }
}

const time = ["08:30","10:25","12:20","14:15","16:10","18:05"]

</script>

<style scoped>

.lessonsWrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: start;
  align-items: center;
  background: orange;
  border-radius: 10px;
  margin: 10px;
  padding: 10px 0;
}

.unitWrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
}

.unit {
  height: 100%;
}

.timeSeparator {
  width: 100%;
  background: black;
  color: orange;
  text-align: center;
}

</style>