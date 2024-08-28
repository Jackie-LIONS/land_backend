<template>
    <a-modal :visible="visible" @ok="handleOk" @cancel="handleCancel">
        <template #title>
            修改用户
        </template>

        <div>
            <a-form :model="modalData" :style="{ width: '600px' }">
                <a-form-item label="序号:">
                    {{ modalData.aid }}
                </a-form-item>
                <a-form-item label="用户名:">
                    <a-input v-model="modalData.username" placeholder="请输入用户名" />
                </a-form-item>
                <a-form-item label="密码:">
                    <a-input v-model="modalData.password" placeholder="请输入密码" />
                </a-form-item>
            </a-form>
        </div>
    </a-modal>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import api from '@/api/index.js';
import { Message } from '@arco-design/web-vue';

const props = defineProps({
    visible: {
        type: Boolean,
    },
    modalData: {
        type: Object
    }
});
const emit = defineEmits(['closeModal']);
const handleOk = () => {
    api.postAdminUpdate({
        aid: props.modalData.aid,
        username: props.modalData.username,
        password: props.modalData.password
    }).then(res => {
        if(res.code === 200){
             emit('closeModal');
             Message.info(res.message)
        }else{
            Message.info(res.message)
        }
    })
};
const handleCancel = () => {
    emit('closeModal');
}
</script>

<style></style>