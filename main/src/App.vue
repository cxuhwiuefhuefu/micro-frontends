<!--
 * @Author: Sunny
 * @Date: 2022-12-29 18:28:29
 * @LastEditors: Suuny
 * @LastEditTime: 2023-01-23 00:51:35
 * @Description: 
 * @FilePath: /micro-frontends/main/src/App.vue
-->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    main-app



    <a href="/subapp/app_react">app_react</a>
    <a href="/subapp/app-vue2">app-vue2</a>
    <a href="/subapp/app-vue3">app-vue3</a>

    <div id="react_app"></div>
    <div id="vue2_app"></div>
    <div id="vue3_app"></div>




    <!-- <router-link to="/subapp/app_react">app_react</router-link>
    <router-link to="/subapp/app-vue2">app-vue2</router-link>
    <router-link to="/subapp/app-vue3">app-vue  3</router-link> -->


    <!-- <router-view></router-view> -->
    <!-- <router-link to="PageOne">PageOne</router-link> -->
    <!-- <router-link to="PageTwo">PageTwo</router-link> -->


  <router-view></router-view>

   
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
