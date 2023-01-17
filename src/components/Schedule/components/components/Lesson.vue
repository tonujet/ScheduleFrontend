<template>
<div>
  <p>
    name: {{name}}
  </p>
  <p>
    day of week: {{dayOfWeek}}
  </p>
  <p>
    time: {{time}}
  </p>
  <p>
    classroom: {{classroom}}
  </p>
  <p>
    teacher: {{`${teacher.name} ${teacher.surname}`}}
  </p>
  <p>
    discipline: {{discipline}}
  </p>
  <p>
    group: {{group}}
  </p>
</div>
</template>

<script>
export default {
  name: "Lesson",
  props: {
    name: String,
    dayOfWeek: String,
    time: String,
    classroom: String,
    teacher: Object,
    discipline: Object,
    group: Object,
  }
}
</script>

<style scoped>

</style>