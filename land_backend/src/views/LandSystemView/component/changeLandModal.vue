<template>
    <a-modal :visible="visible" @ok="handleOk" @cancel="handleCancel">
        <template #title>
            修改土地信息
        </template>

        <div>
            <a-form :model="modalData" :style="{ width: '600px' }">
                <a-form-item label="序号:">
                    {{ modalData.landId }}
                </a-form-item>
                <a-form-item label="土地面积:">
                    <a-input v-model="modalData.area" placeholder="请输入土地类型" />
                </a-form-item>
                <a-form-item label="土地类型:">
                    <a-input v-model="modalData.landtype.type" placeholder="请输入土地类型" />
                </a-form-item>
                <a-form-item label="土地用途:">
                    <a-input v-model="modalData.purpose" placeholder="请输入土地类型" />
                </a-form-item>
                <a-form-item label="土地使用者:">
                    <a-input v-model="modalData.user" placeholder="请输入使用者" />
                </a-form-item>
                <a-form-item label="土地图片:">
                    <img :src="modalData.landPic" alt="land-pic" style="width: 100px; height: auto; border-radius: 4px;" />
                </a-form-item>
                <a-form-item label="使用时间:">
                    {{ modalData.useTime }}
                </a-form-item>
                <a-form-item label="土地备注:">
                    <a-input v-model="modalData.notes" placeholder="请输入土地类型" />
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
    api.postLandUpdate(props.modalData).then(res => {
        if (res.code === 200) {
            emit('closeModal');
            Message.info(res.message)
        } else {
            Message.info(res.message)
        }
    })
};
const handleCancel = () => {
    emit('closeModal');
}
</script>

<style></style>