<template>
    <div class="contain">
        <span class="title">土地管理系统后台</span>
        <div class="userInfo">
            <a-input-group>
                <a-select :options="['landId', 'user', 'type']" v-model="optionValue" :style="{ width: '120px' }"
                    placeholder="土地号" />
                <a-input-search v-model="searchValue" @search="searchEvent"
                    :style="{ width: '260px', 'margin-right': '50px' }" placeholder="请输入内容" search-button>
                    <template #button-icon>
                        <icon-search />
                    </template>
                    <template #button-default>
                        搜索
                    </template>
                </a-input-search>
            </a-input-group>
            <template v-if="isLoggedIn === true">
                <a-avatar direction="vertical" @click="goToLogin" style="cursor: pointer;">
                    <img alt="avatar"
                        src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp" />
                </a-avatar>
                <span class="usr-name" @click="goToLogin" style="cursor: pointer;">{{ username }}</span>
            </template>
            <template v-else>
                <a-button type="primary" @click="goToLogin">未登录</a-button>
            </template>
        </div>
    </div>
</template>


<script setup>
import api from '@/api/index.js';
import { ref, inject, onMounted } from "vue";
import { useRouter } from 'vue-router';
import {
    IconSearch
} from "@arco-design/web-vue/es/icon";

// 登录仓库对象
const isLoggedIn = ref(false);  // 默认未登录
const username = ref('');  // 用户名

// 使用 Vue Router 跳转到登录页面
const router = useRouter();
const goToLogin = () => {
    router.push('/login');
};
onMounted(() => {
    api.getAdminUsername().then(res => {
        if (res.code === 200) {
            isLoggedIn.value = true;
            username.value = res.data
            console.log(username, "aaa");
        }
    })
})


// 搜索框内容
const searchData = inject('searchData');
const updateSearchData = inject('updateSearchData');
const searchValue = ref('');
const optionValue = ref('landId');
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
