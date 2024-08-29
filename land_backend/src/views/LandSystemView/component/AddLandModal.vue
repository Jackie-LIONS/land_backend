<template>
  <a-modal v-model:visible="visible" title="增加土地" @ok="handleOk" @cancel="handleCancel">
    <a-form :model="formData" layout="vertical">
      <a-form-item label="土地面积" required>
        <a-input v-model="formData.area" placeholder="请输入土地面积" />
      </a-form-item>
      <a-form-item label="土地类型" required>
        <a-input v-model="formData.typeId" placeholder="请输入土地类型ID" />
      </a-form-item>
      <a-form-item label="土地用途" required>
        <a-input v-model="formData.purpose" placeholder="请输入土地用途" />
      </a-form-item>
      <a-form-item label="土地使用者" required>
        <a-input v-model="formData.user" placeholder="请输入土地使用者" />
      </a-form-item>
      <a-form-item label="土地位置" required>
        <a-input v-model="formData.position" placeholder="请输入土地位置" />
      </a-form-item>

      <a-form-item label="上传图片" required>
        <a-upload :custom-request="customRequest" :auto-upload="true" :show-file-list="false">
          <template #default>
            <div>
              <img v-if="formData.landPic" :src="formData.landPic" alt="土地照片" style="width: 100%;" />
              <div v-else>
                <arco-icon icon="icon-upload" />
                <div style="margin-top: 8px">上传图片</div>
              </div>
            </div>
          </template>
        </a-upload>
      </a-form-item>
      <a-form-item label="输入备注" required>
        <a-input v-model="formData.notes" placeholder="请输入备注" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script setup>
import { ref } from 'vue';
import api from '@/api/index.js';

const visible = ref(false);
const formData = ref({
});

const handleOk = async () => {
  // 调用 API 增加
  await api.postLandAdd(formData.value).then(res => {
    if (res.code === 200) {
      Message.success("添加成功!");
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
// 自定义上传请求

const customRequest = async ({ fileItem, onSuccess, onError }) => {
  try {
    const formData1 = new FormData();
    formData1.append('file', fileItem.file);  // 确保 file 对象传递正确

    const response = await fetch('/api/land/upload', {
      method: 'POST',
      body: formData1,
    });

    const result = await response.json();
    if (result.code === 200) {
      const relativePath = result.data;
      formData.value.landPic = relativePath; // 获取返回的图片地址
      onSuccess(result, fileItem.file);
      Message.success('图片上传成功');
    } else {
      onError(result.message || '上传失败');
      Message.error(result.message || '上传失败');
    }
  } catch (error) {
    onError('上传失败');
    Message.error('上传失败');
  }
};
</script>