<!--
 * @Author: Sunny
 * @Date: 2023-01-21 15:36:01
 * @LastEditors: Suuny
 * @LastEditTime: 2023-01-21 15:42:44
 * @Description: 
 * @FilePath: /micro-frontends/main/src/layout/index.vue
-->
<template>
    <el-container>
        <el-aside width="200px">
            <AppMene />
        </el-aside>
        <el-container>
            <el-header>
                Micro Frontends
            </el-header>
            <el-main>
                <!-- 主应用路由渲染出口 -->
                <router-view></router-view>

                <!-- 微前端子应用渲染出口 -->
                <div id="subapp-container"></div>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import AppMenu from ',/AppMenu'
export default {
    components: {
        AppMenu
    }
}
</script>
