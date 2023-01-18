<template>
<div>
  <p class="timeWrapper">
    time: {{time}}
  </p>
  <div class="lessonInfo">
    <p>
      name: {{name}}
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
</div>
</template>

<script>
export default {
  name: "Lesson",
  props: {
    name: String,
    time: String,
    classroom: String,
    teacher: Object,
    discipline: Object,
    group: Object,
  }
}
</script>

<style scoped>

.timeWrapper {
  background: black;
  color: orange;
  text-align: center;
  width: 100%;
}

.lessonInfo {
  padding: 20px;
}

</style>