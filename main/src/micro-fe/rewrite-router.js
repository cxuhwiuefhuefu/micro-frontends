/*
 * @Author: Sunny
 * @Date: 2023-01-23 01:13:42
 * @LastEditors: Suuny
 * @LastEditTime: 2023-01-23 14:18:21
 * @Description: 
 * @FilePath: /micro-frontends/main/src/micro-fe/rewrite-router.js
 */

import { handleRouter } from "./handle-router"

export const writeRouter = () => {
    //   数据监听的方式    ------------->
    window.addEventListener('hashchange', () => {
        console.log('hashchange')  
        handleRouter()
    })

    // 监听前进后退的
    window.addEventListener('popstate', () => {
        console.log('popstate')  
        handleRouter()
    })
    



    //   函数重写的方式    ------------->
   
    // 监听 添加历史记录的
    // 重写之前做个备份
    const rawPushState = window.history.pushState
    window.history.pushState = (...args) => {
        rawPushState.apply(window.history, args)
        console.log('监视到 pushState 变化了')
        handleRouter()
    }
    
    // 监听 替换历史记录的
    const rawReplaceState = window.history.replaceState
    window.history.replaceState = (...args) => {
        rawReplaceState.apply(window.history, args)
        console.log('监视到 replaceState 变化了')
        handleRouter()
    }
    
} 