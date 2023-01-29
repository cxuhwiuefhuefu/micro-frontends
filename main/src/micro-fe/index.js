/*
 * @Author: Sunny
 * @Date: 2023-01-22 01:26:18
 * @LastEditors: Suuny
 * @LastEditTime: 2023-01-23 19:47:15
 * @Description: 
 * @FilePath: /micro-frontends/main/src/micro-fe/index.js
 */

import { handleRouter } from "./handle-router";
import { writeRouter } from "./rewrite-router";

let _apps = [];

export const getApps = () => _apps


// 注册
export const registerMicroApps = (apps) => {
    console.log(apps)
    _apps = apps;
}



export const start = () => {
    // 微前端的运行原理
    // 1. 监视路由变化 
    //      hash 路由   window.hashchange 
    //      history 路由
    //          浏览器的前进后退 或者手动调用 history.go、history.back、history.forward  使用 popstate 事件   事件 window.onpopstate
    //          手动切换点击切换路由 pushState、replaceState 需要通过函数重写的方式进行劫持
    

    //  //   数据监听的方式    ------------->


    // window.addEventListener('hashchange', () => {
    //     console.log('hashchange')  
    // })

    // // 监听前进后退的
    // window.addEventListener('popstate', () => {
    //     console.log('popstate')  
    // })
    

    // //   函数重写的方式    ------------->
   
    // // 监听 添加历史记录的
    // // 重写之前做个备份
    // const rawPushState = window.history.pushState
    // window.history.pushState = (...args) => {
    //     rawPushState.apply(window.history, args)
    //     console.log('监视到 pushState 变化了')
    // }
    
    // // 监听 替换历史记录的
    // const rawReplaceState = window.history.replaceState
    // window.history.replaceState = (...args) => {
    //     rawReplaceState.apply(window.history, args)
    //     console.log('监视到 replaceState 变化了')
    // }
    writeRouter()

    // 初始执行匹配 刷新的时候也会执行这个
    handleRouter();

    
    
    




    // 2. 匹配子应用
    // 3. 加载子应用
    // 4. 渲染子应用
    
}