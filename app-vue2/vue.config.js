/*
 * @Author: Sunny
 * @Date: 2022-12-30 23:16:00
 * @LastEditors: Suuny
 * @LastEditTime: 2023-01-21 18:17:25
 * @Description: 
 * @FilePath: /micro-frontends/app-vue2/vue.config.js
 */

const { name } = require('./package.json');


module.exports = {
  devServer: {
    headers: {
      // 允许 CORS 跨域
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    output: {
      // 子应用必须打包出一个库文件
      library: name, // 最终导出到全局变量的名称叫什么 
      // 打包成库的格式必须是 umd
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`, // 如果你需要通过 jsonp 的方式来加载子应用的资源的时 `webpackJsonp_${name}` 这是对应的回调函数的名称
    },
  },
};