<template>
  <div class="schedulePageWrapper">
    <v-select v-if="groups.value.length" :options="groups.value" label="name" :reduce="group => group.id"
              @update:modelValue="handleGroupSelect"/>
    <h2 v-else class="noGroupsWarning">Немає груп для пошуку розкладу</h2>
    <div class="schedulePage">
      <DayOfWeek v-for="dayOfWeek in daysOfWeek"
                 :key="dayOfWeek"
                 :day-of-week="dayOfWeek"
                 :lessons="schedulesRecords.value.filter((scheduleRecord) => scheduleRecord.dayOfWeek === dayOfWeek)"/>
    </div>
  </div>
</template>

<script>
import DayOfWeek from "./components/DayOfWeek.vue";
import {ref} from "vue";

export default {
  name: "SchedulePage",
  components: {DayOfWeek},
  computed: {
    groups: () => groups,
    schedulesRecords: () => schedule,
    daysOfWeek: () => Array.from(new Set(schedule.value.map((dayOfWeek) => dayOfWeek.dayOfWeek))).filter(el => el)
  },
  methods: {
    async handleGroupSelect(groupId) {
      console.log(groupId)
      const {data} = await this.$api.scheduleDays.getSchedule(groupId)
      schedule.value = data
    }
  },
  mounted() {
    this.$load(async () => {
      const {data: groupsData} = await this.$api.groups.getGroups()
      // groups.value = groupsData;

      if (groups.value.length) {
        const {data: scheduleData} = await this.$api.scheduleDays.getSchedule(groups.value[0].id)
        schedule.value = scheduleData
      }
    })
  }
}

const groups = ref([
  {id: 1, name: "IA-11"},
  {id: 2, name: "IA-12"},
  {id: 3, name: "IA-13"},
  {id: 4, name: "IA-14"}
]);
const schedule = ref([]);

</script>

<style scoped>

.noGroupsWarning {
  text-align: center;
}

.schedulePage {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}

</style>