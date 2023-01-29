/*
 * @Author: Sunny
 * @Date: 2022-12-29 18:28:29
 * @LastEditors: Suuny
 * @LastEditTime: 2023-01-25 00:10:31
 * @Description: 
 * @FilePath: /micro-frontends/main/src/main.js
 */

import Vue from 'vue'
import App from './App.vue'

// import { registerMicroApps, start } from 'qiankun'
import { registerMicroApps, start } from './micro-fe'


// 1.引入刚刚配置的路由（router/index.js）
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(ElementUI);

import { initGlobalState } from 'qiankun';

// 初始化 state
const state = {
  name: 'jj'
}
const actions = initGlobalState(state);

actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log(state, prev);
});
setTimeout(() => {
  actions.setGlobalState({...state, age: 18});  
}, 2000);

actions.offGlobalStateChange();


// 注册子应用
// 微前端的运行原理和 SPA 非常的相似
registerMicroApps([
  // 当匹配到 activeRule 的时候，请求获取 entry 资源，渲染到 constainer 中 
  {
    name: 'app-react', // 自定义名称
    entry: '//localhost:3011', // 子应用的 HTML 路口
    container: '#react_app', // 渲染到哪里
    activeRule: '/subapp/app-react' // 路由匹配规则
  },
  {
      name: 'app-vue2', // app name registered
      entry: '//localhost:3012', 
      container: '#vue2_app',
      activeRule: '/subapp/app-vue2',
      props: {
        nickname: '航哥牛逼'
      }
  },
  {
      name: 'app-vue3', // app name registered
      entry: '//localhost:3013', 
      container: '#vue3_app',
      activeRule: '/subapp/app-vue3',
      props: {
        nickname: '航哥牛逼',
        age: 25
      }
   },
])

start()

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
