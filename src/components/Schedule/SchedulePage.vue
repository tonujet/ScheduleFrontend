<template>
  <div class="schedulePageWrapper">
    <DayOfWeek v-for="dayOfWeek in daysOfWeek"
               :key="dayOfWeek"
               :day-of-week="dayOfWeek"
               :lessons="schedulesRecords.value.filter((scheduleRecord) => scheduleRecord.dayOfWeek === dayOfWeek)"/>
  </div>
</template>

<script>
import DayOfWeek from "./components/DayOfWeek.vue";
import {ref} from "vue";

export default {
  name: "SchedulePage",
  components: {DayOfWeek},
  computed: {
    schedulesRecords: () => schedule,
    daysOfWeek: () => Array.from(new Set(schedule.value.map((dayOfWeek) => dayOfWeek.dayOfWeek))).filter(el => el)
  },
  mounted() {
    this.$load(async () => {
      const {data: groupsData} = await this.$api.groups.getGroups()
      groups.value = groupsData;

      const {data: scheduleData} = await this.$api.scheduleDays.getSchedule(1)
      schedule.value = scheduleData
    })
  }
}

const schedule = ref([]);
const groups = ref([]);

</script>

<style scoped>

.schedulePageWrapper {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}

</style>