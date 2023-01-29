/*
 * @Author: Sunny
 * @Date: 2022-12-29 18:31:25
 * @LastEditors: Suuny
 * @LastEditTime: 2023-01-15 22:03:46
 * @Description: 
 * @FilePath: /micro-frontends/app-vue3/src/main.ts
 */

import './public-path'; // 不引入的话 静态资源无法显示
import { createApp } from 'vue'
import App from './App.vue'



// @ts-ignore
let instance = null;
// @ts-ignore
function render(props = {}) {
  console.log(props);
  // @ts-ignore
  const { container } = props;

  instance = createApp(App);
  instance.mount(container ? container.querySelector('#app') : '#app')
}




// 独立运行时
// @ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
// @ts-ignore
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
  // @ts-ignore
  instance.config.globalProperties.$onGlobalStateChange =
    props.onGlobalStateChange;
  // @ts-ignore
  instance.config.globalProperties.$setGlobalState = props.setGlobalState  
}
export async function unmount() {
  // @ts-ignore
  instance.unmount();
  // @ts-ignore
  instance._container.innerHTML = '';
  instance = null;
}