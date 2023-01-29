/*
 * @Author: Sunny
 * @Date: 2023-01-29 17:29:27
 * @LastEditors: Suuny
 * @LastEditTime: 2023-01-29 17:30:36
 * @Description: 
 * @FilePath: \micro-frontends\main\src\micro-fe\fetch-resource.js
 */

export const fetchRource = url = fetch(url).then(res => res.text()) 