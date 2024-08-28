<template>
    <div class="contain">
        <span class="title">土地管理系统后台</span>
        <div class="userInfo">
            <a-input-group>
                <a-select :options="['土地号','土地类型','拥有者']" v-model="optionValue" :style="{width:'120px'}" placeholder="土地号" />
                <a-input-search v-model="searchValue" @search="searchEvent" :style="{width:'260px','margin-right': '50px'}" placeholder="请输入内容" search-button>
                    <template #button-icon>
                        <icon-search />
                    </template>
                    <template #button-default>
                        搜索
                    </template>
                </a-input-search>
            </a-input-group>
            <template v-if="aa">
                <a-avatar direction="vertical">
                    <img alt="avatar" src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp" />
                </a-avatar>
                <span class="usr-name">{{ username }}</span>
            </template>
            <template v-else>
                <a-button type="primary" @click="goToLogin">未登录</a-button>
            </template>
        </div>
    </div>
</template>


<script setup>
import api from '@/api/index.js';
import { ref, inject } from "vue";
import { useRouter } from 'vue-router';
import {
    IconSearch
} from "@arco-design/web-vue/es/icon";

// 登录仓库对象
const isLoggedIn = ref(false);  // 默认未登录
const username = ref('Alice');  // 用户名

// 使用 Vue Router 跳转到登录页面
const router = useRouter();
const goToLogin = () => {
    router.push('/login');  // 假设登录页面的路径是 '/login'
};

// 在实际应用中，你需要根据实际的登录逻辑来更新 `isLoggedIn` 和 `username`
// 例如，从 API 获取用户信息后设置
// isLoggedIn.value = true; // 模拟已登录状态
// username.value = 'Alice'; // 从用户信息中获取用户名


// 搜索框内容
const searchData = inject('searchData');
const updateSearchData = inject('updateSearchData');
const searchValue = ref('');
const optionValue = ref('土地号');
const searchEvent = () => {
    updateSearchData(optionValue.value + '-' + searchValue.value);
}

</script>


<style scoped>
.contain {
    height: 100%;
    display: flex;
    padding: 0 30px;
    align-items: center;
    justify-content: space-between;
    background-color: #161b2e;
}

.title {
    color: white;
    font-size: 1.3rem;
    font-weight: 700;
}

.userInfo {
    display: flex;
    align-items: center;
}

.usr-name {
    color: white;
    margin: 0 1rem;
    font-size: 1.2rem;
}

a-button {
    color: white;
    background-color: #007bff;
    border-color: #007bff;
}
</style>
