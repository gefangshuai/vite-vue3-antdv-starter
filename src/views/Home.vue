<template>
  <div style="width: 900px; margin: 60px auto 0">
    <a-button type="primary">这是按钮</a-button>
    <h1>欢迎访问首页</h1>
    <a-button @click="handleClick">点击弹窗</a-button>
    <a-divider></a-divider>
    应用远程数据：{{ appInfo }}
  </div>
</template>

<script setup>
  import { computed, defineAsyncComponent, shallowRef } from 'vue';
  import { openModal } from '_comp/SModal';
  import { useStore } from 'vuex';
  import { message } from 'ant-design-vue';

  const store = useStore();
  // load data
  message.loading('加载中');
  store.dispatch('app/loadAppAction').then((data) => {
    message.destroy();
    message.success('加载完成');
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