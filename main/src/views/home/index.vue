<!--
 * @Author: Sunny
 * @Date: 2023-01-22 22:58:13
 * @LastEditors: Suuny
 * @LastEditTime: 2023-01-23 00:39:22
 * @Description: 
 * @FilePath: /micro-frontends/main/src/views/home/index.vue
-->
<template>
    <div>
        <h2>home page</h2>
        <button @click="$router.replace('/subapp/app-vue2')">ReplaceState 测试 </button>

        <router-view></router-view>
    </div>
</template>

<script>

export default {
    components: {},
    data() {
        return {

        };
    },
    computed: {},
    watch: {},
    methods: {},
    created() {},
    mounted() {},
    beforeCreate() {},
    beforeMount() {},
    beforeUpdate() {},
    updated() {},
    beforeDestroy() {},
    destroyed() {},
    activated() {},
    }
</script>
 