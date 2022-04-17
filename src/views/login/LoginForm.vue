<template>
  <a-form ref="formRef" @finish="handleLogin" :model="formData">
    <a-form-item
      name="loginName"
      :rules="[{ required: true, message: '请输入账号' }]"
    >
      <a-input
        v-model:value="formData.loginName"
        size="large"
        placeholder="请输入账号"
      />
    </a-form-item>
    <a-form-item
      name="password"
      :rules="[{ required: true, message: '请输入密码' }]"
    >
      <a-input-password
        size="large"
        v-model:value="formData.password"
        placeholder="请输入密码"
      />
    </a-form-item>
    <a-form-item>
      <a-button
        html-type="submit"
        size="large"
        type="primary"
        block
        :loading="logining"
        >登录
      </a-button>
    </a-form-item>
    <a-form-item>
      <text-block space-between>
        <a-checkbox>记住密码</a-checkbox>
        <router-link to="/forgot">忘记密码</router-link>
      </text-block>
    </a-form-item>
  </a-form>
</template>

<script setup>
  import { logining, handleLogin, formData } from '_api/login';
  import TextBlock from '_comp/partial/TextBlock.vue';
</script>

<style scoped></style>
