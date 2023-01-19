<template>
  <div class="schedulePageWrapper">
    <v-select v-if="groups.value.length" :options="groups.value" label="name" :reduce="group => group.id"
              @update:modelValue="handleGroupSelect" :modelValue="groupsIdParameter.value"/>
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
    groupsIdParameter: () => groupsIdParameter,
    groups: () => groups,
    schedulesRecords: () => schedule,
    daysOfWeek: () => Array.from(new Set(schedule.value.map((dayOfWeek) => dayOfWeek.dayOfWeek))).filter(el => el)
  },
  methods: {
    async handleGroupSelect(groupId) {
      groupsIdParameter.value = groupId
      const {data} = await this.$api.scheduleDays.getSchedule(groupsIdParameter.value)
      schedule.value = data
    }
  },
  mounted() {
    this.$load(async () => {
      const {data: groupsData} = await this.$api.groups.getGroups()
      groups.value = groupsData;

      if (groups.value.length) {
        const {data: scheduleData} = await this.$api.scheduleDays.getSchedule(groups.value[0].id)
        schedule.value = scheduleData
      }
    })
  }
}

const groups = ref([]);
const groupsIdParameter = ref(groups.value.length ? groups.value[0].id : null);
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