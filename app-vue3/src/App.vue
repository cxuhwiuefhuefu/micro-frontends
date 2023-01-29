<!--
 * @Author: Sunny
 * @Date: 2022-12-29 18:31:25
 * @LastEditors: Suuny
 * @LastEditTime: 2023-01-16 14:55:01
 * @Description: 
 * @FilePath: /micro-frontends/app-vue3/src/App.vue
-->
<template>
  <div>app-vue3</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';

@Options({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {}
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
