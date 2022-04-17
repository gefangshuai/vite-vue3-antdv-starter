<template>
  <a-form>
    <a-form-item>
      <a-input placeholder="请输入账号"/>
    </a-form-item>
    <a-form-item>
      <a-input-password placeholder="请输入密码"/>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" block>登录</a-button>
    </a-form-item>
      <text-block space-between>
        <a-checkbox>记住密码</a-checkbox>
        <router-link to="/forgot">忘记密码</router-link>
      </text-block>
  </a-form>
</template>

<script setup>
import TextBlock from "_comp/partial/TextBlock.vue";
</script>

<style scoped>

</style>