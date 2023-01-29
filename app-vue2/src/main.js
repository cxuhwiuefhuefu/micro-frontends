/*
 * @Author: Sunny
 * @Date: 2022-12-29 18:30:20
 * @LastEditors: Suuny
 * @LastEditTime: 2023-01-21 18:08:44
 * @Description: 
 * @FilePath: /micro-frontends/app-vue2/src/main.js
 */

import './public-path';
import Vue from 'vue';
import App from './App.vue';





Vue.config.productionTip = false;


let instance = null;
function render(props = {}) {
  const { container } = props;

  instance = new Vue({
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}


// 子应用接入 qiankun
// 1. 导出三个必要的生命周期钩子函数
//    bootstrap 渲染之前  做些初始化的工作
//    mount 渲染函数
//    unmount 卸载函数
// 注意：生命周期函数必须返回 Promise    使用 async 会默认返回 promise
// 子应用是不需要安装 qiankun 的   只有主应用是需要安装 qiankun
// 主应用是不需要生命周期的钩子


export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('[vue] props from main framework', props);

  // 渲染子应用
  render(props);

  props.onGlobalStateChange((state, prev) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log('prop', state, prev);

    setTimeout(() => {
      props.setGlobalState({...state, age: 25});     
    }, 2000);
   
  });

 
}

// 卸载子应用的时候会调用这个方法
export async function unmount() {
  instance.$destroy(); // 销毁事件
  instance.$el.innerHTML = ''; // 手动生成的 html 清空
  instance = null; // 实例重制为 null

  // 不清空会造成内存泄露
}