<template>
  <div class="header">
    <div class="header__logo">
      <router-link  to="/">
        <img src="../../assets/img/logo.png" alt="logo">
      </router-link>
    </div>
    <div class="header__menu">
      <router-link class="header__link schedules" to="/">Розклад</router-link>
      <router-link class="header__link entities" to="/entities">Сутності</router-link>
      <router-link class="header__link news" to="/news">Новини</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .header{
    background: #ffa841;
    display: flex;
    align-items: stretch;
    margin-bottom: 20px;
  }
  .header__logo{
    flex: 1 1 auto;
  }
  .header__logo img{
    height: 80px;
    width: 200px;
  }
  .header__link{
    background: orange;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 20px;
    font-size: 1.8rem;
    margin-left: 60px;
    text-decoration: none;
  }
  .header__menu{
    display: flex;
  }
</style>