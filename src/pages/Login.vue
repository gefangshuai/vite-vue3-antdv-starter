<template>
  <div class="login-page">
    <div class="login-form">
      <div class="form-left">
        <div class="logo">
          <div class="logo-image">LOGO</div>
        </div>
        <div class="title">
          <div class="sub-title">Sub Title Sub Title</div>
          <div class="main-title">管理系统登录页面</div>
        </div>
        <div class="copy-right">&copy;2022 kanasinfo 版权所有</div>
      </div>
      <div class="form-right">
        <a-tabs v-model:activeKey="currentTab" centered>
          <a-tab-pane key="login" tab="登录" class="padding-top">
            <login-form />
          </a-tab-pane>
          <a-tab-pane key="register" tab="注册">sss</a-tab-pane>
        </a-tabs>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import LoginForm from '@/pages/login/LoginForm.vue';

  const currentTab = ref('login');
</script>

<style scoped lang="less">
  @import '../assets/less/vars';

  .login-page {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #f2f3f3;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .login-form {
      width: 700px;
      height: 485px;
      background: #ffffff;
      display: flex;
      flex-direction: row;
      box-shadow: @shadow-1-down;

      .form-left,
      .form-right {
        padding: 80px 40px;
      }

      .form-left {
        width: 300px;
        background: #ddd;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .logo {
          .logo-image {
            width: 200px;
            height: 60px;
            background: #ccc;
            text-align: center;
            line-height: 60px;
          }
        }

        .title {
          .sub-title {
            font-size: 16px;
          }

          .main-title {
            font-size: 24px;
          }
        }

        .copy-right {
          color: @text-color-grey;
        }
      }

      .form-right {
        flex: 1;

        /deep/ .ant-tabs-nav-list {
          width: 100%;

          .ant-tabs-tab {
            width: 50%;
            justify-content: center;
          }
        }

        /deep/ .ant-form-item {
          &.ant-form-item-has-error,
          &.ant-form-item-with-help {
            margin-bottom: 0;
          }

          margin-bottom: 28px;
        }

        /deep/ .ant-form-item-with-help .ant-form-item-explain {
          min-height: 28px;
        }
      }
    }
  }
</style>
