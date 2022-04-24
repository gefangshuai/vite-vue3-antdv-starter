<template>
  <a-config-provider :locale="locale">
    <delay-remove :visible="pageLoading">
      <div class="page-loading">
        <a-spin :spinning="true" />
      </div>
    </delay-remove>
    <router-view />
    <s-modal></s-modal>
  </a-config-provider>
</template>
<script setup>
  import SModal from '_libs/s-modal/SModal.vue';
  import zhCN from 'ant-design-vue/es/locale/zh_CN';
  import dayjs from 'dayjs';
  import 'dayjs/locale/zh-cn';
  import { useStore } from 'vuex';
  import { computed, h } from 'vue';
  import DelayRemove from '_libs/other/DelayRemove.vue';

  const store = useStore();
  dayjs.locale('zh-cn');
  const locale = zhCN;
  const pageLoading = computed(() => store.getters['app/pageLoadingGet']);
</script>
<style lang="less">
  .page-loading {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.05);

    z-index: 99;

    .ant-spin-text {
      margin-top: 10px;
    }
  }
</style>
