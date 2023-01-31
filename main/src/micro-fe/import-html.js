/*
 * @Author: Sunny
 * @Date: 2023-01-27 22:53:04
 * @LastEditors: Suuny
 * @LastEditTime: 2023-01-31 15:20:26
 * @Description: 
 * @FilePath: \micro-frontends\main\src\micro-fe\import-html.js
 */

import { fetchRource } from "./fetch-resource";

//  qiankun 用了 import-html-entry 这个库
export const importHTML = async (url) => {

  const html = await fetchRource(url)
  const template = document.createElement('div');
  // template.innerHTML = '<p>hello qiankun</p>'
  template.innerHTML = html // 转成 DOM  后面基于 DOM 去操作

  // 获取 template 里面所有的script 节点
  const scripts = template.querySelector('script')

  // 获取所有 script 标签的代码：[代码, 代码]
  function getExternalScripts() {
    console.log(scripts)
    return Promise.all(Array.from(scripts).map(script => {·
      const src = script.getAttribute('src')
      if(!src) {
        return Promise.resolve(script.innerHTML)
      } else {
        return fetchRource(
          src.startWidth('http') ? src : `${url}${src}`
        )
      }
    }))
  }

  // 获取并执行所有的 script 脚本代码
  async function execScripts() {
    const scripts = await getExternalScripts()
    console.log(scripts);
    scripts.forEach(code => {
      eval(code);
    })
  }
  
  return {
    template,
    getExternalScripts,
    execScripts 
  }
}
 