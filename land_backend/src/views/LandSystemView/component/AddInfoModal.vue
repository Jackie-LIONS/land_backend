<template>
    <a-modal v-model:visible="visible" title="增加管理员" @ok="handleOk" @cancel="handleCancel">
      <a-form :model="formData" layout="vertical">
        <a-form-item label="姓名" required>
          <a-input v-model="formData.username" placeholder="请输入姓名" />
        </a-form-item>
        <a-form-item label="密码" required>
          <a-input v-model="formData.password" type="password" placeholder="请输入密码" />
        </a-form-item>
      </a-form>
    </a-modal>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import api from '@/api/index.js';
  
  const visible = ref(false);
  const formData = ref({
    username: '',
    password: ''
  });
  
  const handleOk = async () => {
    // 调用 API 增加管理员
    await api.postAdminAdd(formData.value).then(res => {
      if (res.code === 200) {
        Message.success("管理员添加成功!");
        visible.value = false;
        // 通知父组件重新获取管理员列表
        emit('refreshList');
      } else {
        Message.error("添加失败: " + res.message);
      }
    }).catch(error => {
      Message.error('添加失败');
      console.error(error);
    });
  };
  
  const handleCancel = () => {
    visible.value = false;
  };
  
  defineExpose({
    showModal: () => {
      visible.value = true;
    }
  });
  </script>
  