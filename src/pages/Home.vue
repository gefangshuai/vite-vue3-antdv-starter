<template>
  <div style="width: 900px; margin: 60px auto 0">
    <h1>欢迎访问首页</h1>
    <a-divider></a-divider>
    <div v-if="loading">正在加载远程数据...</div>
    <div v-else>应用远程数据：{{ appInfo }}</div>
    <a-divider></a-divider>
    <a-button type="primary" v-link="`/example`">点击查看组件示例页</a-button>
  </div>
</template>

<script setup>
  import { computed, ref } from 'vue';
  import { useStore } from 'vuex';

  const loading = ref(true);
  const store = useStore();

  store.dispatch('app/loadAppAction').then((data) => {
    loading.value = false;
  });
  const appInfo = computed(() => store.getters['app/appGet']);
</script>

<style scoped></style>