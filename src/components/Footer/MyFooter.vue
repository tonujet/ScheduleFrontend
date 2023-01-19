<template>
  <div class="footer">
    <div class="footer__content">
      <p class="footer__content_name">Партнери</p>
      <p>Belka</p>
      <p>Фіот Online</p>
    </div>
    <div class="footer__content">
      <p class="footer__content_name">Контакти</p>
      <div>
        <p>Телефони</p>
        <p>380 (44) 204 86 10</p>
        <p>380 (44) 204 92 85</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyFooter"
}
</script>

<style scoped>
.footer {;
  display: flex;
  background: orange;
  padding: 20px;
}

.footer__content {
  color: darkblue;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.footer__content_name {
  margin-bottom: 10px;
}
</style>