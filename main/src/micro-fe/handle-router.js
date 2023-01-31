/*
 * @Author: Sunny
 * @Date: 2023-01-23 14:13:24
 * @LastEditors: Suuny
 * @LastEditTime: 2023-01-29 18:05:17
 * @Description: 处理路由变化
 * @FilePath: \micro-frontends\main\src\micro-fe\handle-router.js
 */

import { getApps } from "../micro-fe/index"
import { importHTML } from "../micro-fe/import-html"


export const handleRouter =  async () => {
    console.log("handleRouter")

    
    // 2. 匹配子应用
    // 2.1 获取到当前的路由路径
    console.log(window.location.pathname)
    // 2.2 去 apps 里面查找
    const apps  = getApps()
    const app = apps.find(item => window.location.pathname.startsWith(item.activeRule))
    console.log("app", app)

    if(!app) { // 没有匹配到相应的子应用 就不往下执行
        return;
    }



    // 3. 加载子应用

    // 把 html 请求过来 渲染到 container 里面
    // 请求获取子应用的资源：HTML、CSS、JS
    // 请求的方式：ajax、fetch
    // const html = await fetch(app.entry).then(res => res.text());  // 拿到请求数据的普通文本
    // console.log('html', html )
    // const container = document.querySelector(app.container)
    
    // container.innerHTML = html;  // 为什么没有渲染出来 ？
    // 原因：
    // 1. 浏览器需要通过执行 JS 来生成内容
    // 2. 浏览器出于安全考虑，innerHTML 中的 script 不会加载执行

    // 解决方案：
    //  1. 需要手动加载子应用的 script
    //  2. 执行 script 中的代码
    //      eval 或 new Function 执行字符串里的代码

  const { template, getExternalScripts, execScripts } = await importHTML(app.entry)
  const container = document.querySelector(template);
  container.appendChild(template)

  // getExternalScripts().then((scripts) => {
  //   console.log(scripts);
  // })


  // 配置全局环境变量 由主应用控制生命周期去处理
  window.__POWER_BY_QIANKUN__ = true

  execScripts()
    

   
     
    
    // 4. 渲染子应用
}