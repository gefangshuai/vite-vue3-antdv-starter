<template>
  <div style="width: 900px; margin: 60px auto 0">
    <a-button type="primary">这是按钮</a-button>
    <h1>欢迎访问首页</h1>
    <a-button @click="handleClick">点击弹窗</a-button>
    <a-divider></a-divider>
    <div v-if="loading">正在加载远程数据...</div>
    <div v-else>应用远程数据：{{ appInfo }}</div>
  </div>
</template>

<script setup>
  import { computed, defineAsyncComponent, ref, shallowRef } from 'vue';
  import { openModal } from '_comp/SModal';
  import { useStore } from 'vuex';

  const loading = ref(true);
  const store = useStore();
  // load data

  store.dispatch('app/loadAppAction').then((data) => {
    loading.value = false;
  });
  const appInfo = computed(() => store.getters['app/appGet']);

  const handleClick = () => {
    openModal({
      component: shallowRef(
        defineAsyncComponent(() => import('./HomeModal.vue'))
      ),
      modal: {
        title: '弹窗了！',
      },
    });
  };
</script>

<style scoped></style>
