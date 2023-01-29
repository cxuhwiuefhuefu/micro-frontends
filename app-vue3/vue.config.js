/*
 * @Author: Sunny
 * @Date: 2022-12-30 23:16:00
 * @LastEditors: Suuny
 * @LastEditTime: 2022-12-31 13:27:43
 * @Description: 
 * @FilePath: /micro-frontends/app-vue2/vue.config.js
 */

const { name } = require('./package.json');


module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    output: {
      library: name,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
};