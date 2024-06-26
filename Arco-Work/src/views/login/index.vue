<template>
  <div class="login-container">
    <img src="../../assets/bg.png" class="bg-img" />
    <div class="center">
      <div class="left">
        <img src="../../assets/bg_left.png" class="left-bg-img" />
      </div>
      <div class="form-wrapper">
        <div class="title">账号登录</div>
        <div class="item-wrapper mt-6">
          <a-input v-model="username" placeholder="请输入用户名/手机号" allow-clear size="large">
            <template #prefix>
              <icon-mobile />
            </template>
          </a-input>
        </div>
        <div class="item-wrapper mt-4">
          <a-input-password v-model="password" placeholder="请输入密码" allow-clear size="large">
            <template #prefix>
              <icon-lock />
            </template>
          </a-input-password>
        </div>
        <div class="flex-1"></div>
        <div class="mt-10">
          <a-button type="primary" class="login" :loading="activeKey === 'loginLoading'" @click="onLogin">
            登录
          </a-button>
        </div>
        <div class="my-width flex-1 mt-4 mb-8">
          <div class="flex justify-between">
            <a-checkbox v-model="autoLogin">自动登录</a-checkbox>
            <a-link :underline="false" type="primary">忘记密码？</a-link>
          </div>
        </div>
        <a-divider orientation="center">第三方登录</a-divider>
        <div class="text-center text-lg">
          <icon-alipay-circle />
          <icon-github class="mr-6 ml-6" />
          <icon-weibo-circle-fill />
        </div>
      </div>
    </div>
    <div class="bottom">{{
            'Vue3 + Vite + Typescript + Arco Design © ' +
            projectName +
            ' '
          }}</div>
  </div>
</template>

<script lang="ts" name='Login' setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Message } from '@arco-design/web-vue'
import { login } from '@/api/url'
import { UserState } from '@/store/types'
import { projectName } from '@/setting'
import useUserStore from '@/store/modules/user'
import { curryingRequest, useBasicsState } from '@/hooks';
const [activeKey, setActiveKey] = useBasicsState<string | null>(null);
const username = ref('admin')
const password = ref('123456')
const autoLogin = ref(true)
const router = useRouter()
const route = useRoute()
const userStore = useUserStore()
// 登录
const onLogin = async () => {
  // 发起请求
  const { res, err } = await curryingRequest(
    () =>
      login({
        username: username.value,
        password: password.value,
      }),
    {
      before: () => setActiveKey('loginLoading'),
      after: () => setActiveKey(null),
    }
  );
  if (err) return
  console.log('login接口', res);
  userStore.saveUser(res?.data.data as UserState).then(() => {
    router
      .replace({
        path: route.query.redirect ? (route.query.redirect as string) : '/',
      })
      .then(() => {
        Message.success('登录成功，欢迎：' + username.value)
      })
  })
}
</script>

<style lang="less" scoped>
@leftWith: 35%;

.login-container {
  position: relative;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  .bg-img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .bottom {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 3%;
    font-size: 14px;
    font-weight: bold;
    color: #333;
    text-align: center;
  }

  .center {
    position: relative;
    z-index: 9;
    width: 70%;
    height: 60%;
    border-radius: 10px;
    border: 1px solid #f5f5f5;
    display: flex;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 0 5px #ececec;

    .left {
      position: relative;
      width: 50%;
      height: 100%;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: center;

      .left-bg-img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }

      .proj-name {
        font-size: 30px;
        font-weight: bold;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .form-wrapper {
      width: 50%;
      padding: 2% 5%;
      height: 100%;
      display: flex;
      flex-direction: column;

      .title {
        font-size: 25px;
        font-weight: bold;
        margin-bottom: 20px;
        text-align: center;
      }

      .login {
        width: 100%;
      }
    }
  }
}

@media screen and(max-width: 966px) {
  .left {
    display: none;
  }

  .right {
    background-image: url('../../assets/img_login_mobile_bg_01.jpg');
    background-size: cover;

    .form-wrapper {
      width: 80% !important;
    }
  }
}
</style>
