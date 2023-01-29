/*
 * @Author: Sunny
 * @Date: 2023-01-16 17:21:57
 * @LastEditors: Suuny
 * @LastEditTime: 2023-01-23 00:38:05
 * @Description: 
 * @FilePath: /micro-frontends/main/src/router/index.js
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//路由跳转的组件，要提前注入
// import PageOne from '../components/PageOne.vue';//【地方一】
// import PageTwo from '../components/PageTwo.vue';

import Home from '../views/home';

//路由配置
const router = new VueRouter({
    mode: 'history',
    routes: [
    //     {
    //     path: '/PageOne',//【地方二】
    //     component: PageOne
    // },
    // {
    //     path: '/PageTwo',//【地方三】
    //     component: PageTwo
    // }
    {
        path: '/',//
        component: Home
    }
    ]
});

export default router;
