<template>
  <div class="app">
    <MyHeader class="app__header"/>
    <content class="app__content">
      <router-view/>
    </content>
    <MyFooter class="app__footer"/>
  </div>
</template>
<script>
import MyHeader from "@/components/Header/MyHeader.vue";
import MyFooter from "@/components/Footer/MyFooter.vue";
import options from "@/mocks/options";
import "vue-select/dist/vue-select.css";

 export default {
   components:{
     MyHeader, MyFooter
   },
   created() {
     localStorage.setItem("options", JSON.stringify(options))
   }
 }
</script>
<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html, body{
  height: 100%;
}
.app{
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 2000px;
}

.app__content{
  display: block;
  flex: 1 1 auto;
  margin: 0px 10px;
}
.app__footer{
  flex: 0 0 auto;
}
</style>
