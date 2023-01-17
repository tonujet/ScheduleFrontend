<template>
  <div class="header">
    <div class="header__logo">
      <img src="../../assets/img/logo.png" alt="logo">
    </div>
    <div class="header__menu">
      <router-link class="header__link schedules" to="/">Розклад</router-link>
      <router-link class="header__link entities" to="/">Сутності</router-link>
      <router-link class="header__link news" to="/">Новини</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .header{
    display: flex;
    align-items: center;
  }
  .header__logo{
    flex: 1 1 auto;
  }
  .header__logo img{
    height: 80px;
    width: 200px;
  }
  .header__link{
    display: block;
    margin-left: 20px;
    font-size: 2rem;
    text-decoration: none;
  }
  .header__menu{
    display: flex;
  }
</style>