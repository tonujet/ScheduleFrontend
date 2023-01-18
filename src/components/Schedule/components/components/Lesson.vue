<template>
  <div class="lessonWrapper">
    <p>
      Назва: {{ lesson.name }}
    </p>
    <p>
      Клас: {{ lesson.classroom }}
    </p>
    <p>
      Викладач: {{ `${lesson.teacher.name} ${lesson.teacher.surname}` }}
    </p>
    <p>
      Предмет: {{ lesson.discipline }}
    </p>
    <p>
      Група: {{ lesson.group }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Lesson",
  props: {
    lesson: Object,
  }
}
</script>

<style scoped>

.lessonWrapper {
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 20px;
}

</style>