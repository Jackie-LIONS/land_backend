<template>
    <a-layout style="height: 100%;">
        <a-layout-header style="height: 9%">
            <Header></Header>
        </a-layout-header>
        <a-layout style="height: 70%">
            <a-layout-sider class="sider">
                <SiderNav />
            </a-layout-sider>
            <a-layout-content>
                <div class="content">
                    <RouterView />
                </div>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>
<script setup>
import { ref, provide } from "vue";
import { RouterView } from 'vue-router'
import SiderNav from '@/components/SiderNav.vue'
import Header from './Header.vue'

const searchData = ref('');
const updateSearchDataValue = (newValue) => {
    searchData.value = newValue;
};
provide('searchData', searchData);
provide('updateSearchData', updateSearchDataValue);

</script>
<style scoped>
.arco-layout-content {
    background-color: #1c2238;
    
}
.sider {
    width: auto !important;
}
.content {
    height: 90%;
    margin: 10px;
    padding: 15px;
    border-radius: 10px;
    background-color: #2a314e;
}
</style>