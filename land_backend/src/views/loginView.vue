<template>
    <div class="container">
        <div class="box">
            <h3>土地管理系统</h3>
            <a-form @keypress.enter="onSubmit()" hide-required-asterisk :model="user" ref="form" :rules="rules">
                <a-form-item label="用户名" label-width="60px" prop="username" style="width: 300px;">
                    <a-input type="text" v-model="user.username" />
                </a-form-item>
                <a-form-item label="密码" label-width="60px" prop="password" style="width: 300px;"
                    class="custom-form-item">
                    <a-input-password v-model:visibility="visibility" v-model="user.password" :defaultVisibility="false"
                        allow-clear style="width: 100%;" />
                </a-form-item>
                <a-form-item label="验证码" prop="captcha">
                    <a-input :prefix-icon="Star" v-model="user.captcha" style="width: 40%; left: 10%;" type="text"
                        placeholder="captcha" name="captcha"></a-input>
                    <img :src="captchaImg" style="width: 20%;position: absolute;left: 55%;" alt=""
                        @click="refreshCaptcha" />
                </a-form-item>
                <a-form-item label-width="60px" style="width: 300px;">
                    <a-button type="primary" style="width: 100%" @click="onSubmit()">登录</a-button>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRouter } from 'vue-router'
import api from '@/api/index.js';
import { Message } from '@arco-design/web-vue';

const visibility = ref(true);
const form = ref(null);
const router = useRouter();

// 声明用户信息
const user = reactive({
    username: "",
    password: "",
    captcha: ""         //验证码
});

// 图片验证码
const captchaImg = ref('');
onMounted(() => {
    captchaImg.value = '/api/admin/captcha';
})
// 验证码刷新
const refreshCaptcha = () => {
    captchaImg.value = '/api/admin/captcha' + '?time=' + Date.now();
}
const onSubmit = () => {
    form.value.validate((valid) => {
        if (!valid) {
            api.postLogin({
                username: user.username,
                password: user.password,
                checkCode: user.captcha
            }).then(res => {
                if (res.code === 200) {
                    console.log(res.data,"aaa");
                    sessionStorage.setItem('token',res.data)
                    // loginStroe.token = res.data
                    router.push('/')
                } else {
                    Message.error(res.message)
                }
            })
        }
    });
};
</script>

<style lang="scss" scoped>
.container {
    height: 100%;
    background: url(../assets/images/08.png);
    color: #fff;
    text-align: center;
}

.box {
    width: 360px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    border-radius: 15px;
    padding: 20px;

    :deep(.el-form-item__label) {
        color: #fff;
    }

}
</style>