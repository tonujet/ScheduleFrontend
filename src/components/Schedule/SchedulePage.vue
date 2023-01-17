<template>
  <div class="schedulePageWrapper">
    <DayOfWeek day-of-week="Monday" :lessons="[]"/>
    <DayOfWeek day-of-week="Tuesday" :lessons="[]"/>
    <DayOfWeek day-of-week="Wednesday" :lessons="[]"/>
    <DayOfWeek day-of-week="Thursday" :lessons="[]"/>
    <DayOfWeek day-of-week="Friday" :lessons="[]"/>
    <DayOfWeek day-of-week="Saturday" :lessons="[]"/>
    <DayOfWeek day-of-week="Sunday" :lessons="[]"/>
  </div>
</template>

<script>
import DayOfWeek from "./components/DayOfWeek.vue";

export default {
  name: "SchedulePage",
  components: {DayOfWeek}
}
</script>

<style scoped>

.schedulePageWrapper {
  display: flex;
}

</style>