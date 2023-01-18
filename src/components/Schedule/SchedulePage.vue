<template>
  <div class="schedulePageWrapper">
    <DayOfWeek v-for="dayOfWeek in daysOfWeek" :key="dayOfWeek" :day-of-week="dayOfWeek" :lessons="schedulesRecords.filter((scheduleRecord) => scheduleRecord.dayOfWeek === dayOfWeek)" />
  </div>
</template>

<script>
import DayOfWeek from "./components/DayOfWeek.vue";

export default {
  name: "SchedulePage",
  components: {DayOfWeek},
  computed: {
    schedulesRecords: () => schedule,
    daysOfWeek: () => Array.from(new Set(schedule.map((dayOfWeek) => dayOfWeek.dayOfWeek))).filter(el => el)
  }
}

const schedule = [
  {
    "id":
        43,
    "name":
        "Психологія Лекція",
    "dayOfWeek":
        "MONDAY",
    "time":
        "08:30",
    "classroom":
        "18-506",
    "teacher":
        {
          "id":
              7, "name":
              "Яна", "surname":
              "Цимбаленко", "email":
              null, "phone":
              null
        }
    ,
    "discipline":
        null,
    "group":
        null
  }
  ,
  {
    "id":
        44,
    "name":
        "Психологія конфлікту Лекція",
    "dayOfWeek":
        "MONDAY",
    "time":
        "10:25",
    "classroom":
        "18-222",
    "teacher":
        {
          "id":
              22, "name":
              "Григорій", "surname":
              "Ложкін", "email":
              null, "phone":
              null
        }
    ,
    "discipline":
        null,
    "group":
        null
  }
  ,
  {
    "id":
        45,
    "name":
        "Економічна психологія Практика",
    "dayOfWeek":
        "MONDAY",
    "time":
        "12:20",
    "classroom":
        "18-223",
    "teacher":
        {
          "id":
              5, "name":
              "Олена", "surname":
              "Винославська", "email":
              null, "phone":
              null
        }
    ,
    "discipline":
        null,
    "group":
        null
  }
  ,
  {
    "id":
        46,
    "name":
        "Соціальна психологія Практика",
    "dayOfWeek":
        "MONDAY",
    "time":
        "14:15",
    "classroom":
        "18-200",
    "teacher":
        {
          "id":
              4, "name":
              "Ірина", "surname":
              "Блохіна", "email":
              null, "phone":
              null
        }
    ,
    "discipline":
        null,
    "group":
        null
  }
  ,
  {
    "id":
        0,
    "name":
        null,
    "dayOfWeek":
        null,
    "time":
        null,
    "classroom":
        null,
    "teacher":
        null,
    "discipline":
        null,
    "group":
        null
  }
  ,
  {
    "id":
        0,
    "name":
        null,
    "dayOfWeek":
        null,
    "time":
        null,
    "classroom":
        null,
    "teacher":
        null,
    "discipline":
        null,
    "group":
        null
  }
  ,
  {
    "id":
        47,
    "name":
        "Політична наука: конфліктологічний підхід Лекція",
    "dayOfWeek":
        "TUESDAY",
    "time":
        "08:30",
    "classroom":
        "18-333",
    "teacher":
        {
          "id":
              19, "name":
              "Андрій", "surname":
              "Багінсткій", "email":
              null, "phone":
              null
        }
    ,
    "discipline":
        null,
    "group":
        null
  }
  ,
  {
    "id":
        48,
    "name":
        "Політична участь та громадянська відповідальність Практика",
    "dayOfWeek":
        "TUESDAY",
    "time":
        "10:25",
    "classroom":
        null,
    "teacher":
        {
          "id":
              7, "name":
              "Яна", "surname":
              "Цимбаленко", "email":
              null, "phone":
              null
        }
    ,
    "discipline":
        null,
    "group":
        null
  }
  ,
  {
    "id":
        49,
    "name":
        "Права і свободи людини Практика",
    "dayOfWeek":
        "TUESDAY",
    "time":
        "12:20",
    "classroom":
        null,
    "teacher":
        {
          "id":
              18, "name":
              "Ірина", "surname":
              "Кудерська", "email":
              null, "phone":
              null
        }
    ,
    "discipline":
        null,
    "group":
        null
  }
  ,
  {
    "id":
        50,
    "name":
        "Розумні міста Првктика",
    "dayOfWeek":
        "TUESDAY",
    "time":
        "14:15",
    "classroom":
        "18-333",
    "teacher":
        {
          "id":
              8, "name":
              "Світлана", "surname":
              "Чукут", "email":
              null, "phone":
              null
        }
    ,
    "discipline":
        null,
    "group":
        null
  }
  ,
  {
    "id":
        0,
    "name":
        null,
    "dayOfWeek":
        null,
    "time":
        null,
    "classroom":
        null,
    "teacher":
        null,
    "discipline":
        null,
    "group":
        null
  }
  ,
  {
    "id":
        0,
    "name":
        null,
    "dayOfWeek":
        null,
    "time":
        null,
    "classroom":
        null,
    "teacher":
        null,
    "discipline":
        null,
    "group":
        null
  }
  ,
  {
    "id":
        51,
    "name":
        "Бази даних Лекція",
    "dayOfWeek":
        "WEDNESDAY",
    "time":
        "08:30",
    "classroom":
        "18-225",
    "teacher":
        {
          "id":
              9, "name":
              "Ксенія", "surname":
              "Ульяницька", "email":
              null, "phone":
              null
        }
    ,
    "discipline":
        null,
    "group":
        null
  }
  ,
  {
    "id":
        52,
    "name":
        "Електроніка та мікропроцесорна техніка. Частина 1. Комп\"ютерна електроніка Лекція",
    "dayOfWeek":
        "WEDNESDAY",
    "time":
        "10:25",
    "classroom":
        "18-121",
    "teacher":
        {
          "id":
              10, "name":
              "Анатолій", "surname":
              "Новацький", "email":
              null, "phone":
              null
        }
    ,
    "discipline":
        null,
    "group":
        null
  }
  ,
  {
    "id":
        53,
    "name":
        "Комп\"ютерні мережі Лекції",
    "dayOfWeek":
        "WEDNESDAY",
    "time":
        "12:20",
    "classroom":
        "18-333",
    "teacher":
        {
          "id":
              11, "name":
              "Олександр", "surname":
              "Ролік", "email":
              null, "phone":
              null
        }
    ,
    "discipline":
        null,
    "group":
        null
  }
  ,
  {
    "id":
        0,
    "name":
        null,
    "dayOfWeek":
        null,
    "time":
        null,
    "classroom":
        null,
    "teacher":
        null,
    "discipline":
        null,
    "group":
        null
  }
  ,
  {
    "id":
        0,
    "name":
        null,
    "dayOfWeek":
        null,
    "time":
        null,
    "classroom":
        null,
    "teacher":
        null,
    "discipline":
        null,
    "group":
        null
  }
  ,
  {
    "id":
        0,
    "name":
        null,
    "dayOfWeek":
        null,
    "time":
        null,
    "classroom":
        null,
    "teacher":
        null,
    "discipline":
        null,
    "group":
        null
  }
  ,
  {
    "id":
        54,
    "name":
        "Електроніка та мікропроцесорна техніка. Частина 1. Комп\"ютерна електроніка Лабораторна",
    "dayOfWeek":
        "THURSDAY",
    "time":
        "08:30",
    "classroom":
        "18-123",
    "teacher":
        {
          "id":
              21, "name":
              "Юрій", "surname":
              "Берник", "email":
              null, "phone":
              null
        }
    ,
    "discipline":
        null,
    "group":
        null
  }
  ,
  {
    "id":
        0,
    "name":
        null,
    "dayOfWeek":
        null,
    "time":
        null,
    "classroom":
        null,
    "teacher":
        null,
    "discipline":
        null,
    "group":
        null
  }
  ,
  {
    "id":
        55,
    "name":
        "Розроблення web-застосувань Лабораторна",
    "dayOfWeek":
        "THURSDAY",
    "time":
        "12:20",
    "classroom":
        null,
    "teacher":
        {
          "id":
              14, "name":
              "Роман", "surname":
              "Белоус", "email":
              null, "phone":
              null
        }
    ,
    "discipline":
        null,
    "group":
        null
  }
  ,
  {
    "id":
        56,
    "name":
        "Вища математика. Частина 3. Операційне числення Практика",
    "dayOfWeek":
        "THURSDAY",
    "time":
        "14:15",
    "classroom":
        "18-332",
    "teacher":
        {
          "id":
              15, "name":
              "Валентина", "surname":
              "Коваленко", "email":
              null, "phone":
              null
        }
    ,
    "discipline":
        null,
    "group":
        null
  }
  ,
  {
    "id":
        0,
    "name":
        null,
    "dayOfWeek":
        null,
    "time":
        null,
    "classroom":
        null,
    "teacher":
        null,
    "discipline":
        null,
    "group":
        null
  }
  ,
  {
    "id":
        0,
    "name":
        null,
    "dayOfWeek":
        null,
    "time":
        null,
    "classroom":
        null,
    "teacher":
        null,
    "discipline":
        null,
    "group":
        null
  }
  ,
  {
    "id":
        57,
    "name":
        "Вища математика. Частина 3. Операційне числення Лекція",
    "dayOfWeek":
        "FRIDAY",
    "time":
        "08:30",
    "classroom":
        null,
    "teacher":
        {
          "id":
              15, "name":
              "Валентина", "surname":
              "Коваленко", "email":
              null, "phone":
              null
        }
    ,
    "discipline":
        null,
    "group":
        null
  }
  ,
  {
    "id":
        58,
    "name":
        "Права і свободи людини Лекція",
    "dayOfWeek":
        "FRIDAY",
    "time":
        "10:25",
    "classroom":
        null,
    "teacher":
        {
          "id":
              18, "name":
              "Ірина", "surname":
              "Кудерська", "email":
              null, "phone":
              null
        }
    ,
    "discipline":
        null,
    "group":
        null
  }
  ,
  {
    "id":
        59,
    "name":
        "Вступ до філософії Практика",
    "dayOfWeek":
        "FRIDAY",
    "time":
        "12:20",
    "classroom":
        "18-123",
    "teacher":
        {
          "id":
              16, "name":
              "Тетяна", "surname":
              "Свідло", "email":
              null, "phone":
              null
        }
    ,
    "discipline":
        null,
    "group":
        null
  }
  ,
  {
    "id":
        0,
    "name":
        null,
    "dayOfWeek":
        null,
    "time":
        null,
    "classroom":
        null,
    "teacher":
        null,
    "discipline":
        null,
    "group":
        null
  }
  ,
  {
    "id":
        0,
    "name":
        null,
    "dayOfWeek":
        null,
    "time":
        null,
    "classroom":
        null,
    "teacher":
        null,
    "discipline":
        null,
    "group":
        null
  }
  ,
  {
    "id":
        0,
    "name":
        null,
    "dayOfWeek":
        null,
    "time":
        null,
    "classroom":
        null,
    "teacher":
        null,
    "discipline":
        null,
    "group":
        null
  }
  ,
  {
    "id":
        0,
    "name":
        null,
    "dayOfWeek":
        null,
    "time":
        null,
    "classroom":
        null,
    "teacher":
        null,
    "discipline":
        null,
    "group":
        null
  }
  ,
  {
    "id":
        0,
    "name":
        null,
    "dayOfWeek":
        null,
    "time":
        null,
    "classroom":
        null,
    "teacher":
        null,
    "discipline":
        null,
    "group":
        null
  }
  ,
  {
    "id":
        60,
    "name":
        "Практичний курс іноземної мови. Частина 2 Практика",
    "dayOfWeek":
        "SATURDAY",
    "time":
        "12:20",
    "classroom":
        null,
    "teacher":
        {
          "id":
              17, "name":
              "Ольга", "surname":
              "Шевченко", "email":
              null, "phone":
              null
        }
    ,
    "discipline":
        null,
    "group":
        null
  }
  ,
  {
    "id":
        0,
    "name":
        null,
    "dayOfWeek":
        null,
    "time":
        null,
    "classroom":
        null,
    "teacher":
        null,
    "discipline":
        null,
    "group":
        null
  }
  ,
  {
    "id":
        0,
    "name":
        null,
    "dayOfWeek":
        null,
    "time":
        null,
    "classroom":
        null,
    "teacher":
        null,
    "discipline":
        null,
    "group":
        null
  }
  ,
  {
    "id":
        0,
    "name":
        null,
    "dayOfWeek":
        null,
    "time":
        null,
    "classroom":
        null,
    "teacher":
        null,
    "discipline":
        null,
    "group":
        null
  }
]

</script>

<style scoped>

.schedulePageWrapper {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}

</style>