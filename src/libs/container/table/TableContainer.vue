<template>
  <base-container class="table-container" :hide-head="hideHead">
    <template v-slot:title>
      <slot v-if="$slots.title" name="title"></slot>
      <span v-else>{{ title }}</span>
    </template>
    <template v-slot:extra v-if="$slots.extra">
      <slot name="extra"></slot>
    </template>
    <a-table
      v-bind="store.tableConfig"
      ref="tableRef"
      class="table-fix-pagination"
      @change="handleTableChange"
    >
      <template
        v-if="$slots.customFilterIcon"
        #customFilterIcon="{ filtered, column }"
      >
        <slot name="customFilterIcon" v-bind="{ filtered, column }"></slot>
      </template>
      <template
        v-if="$slots.customFilterDropdown"
        #customFilterDropdown="{
          setSelectedKeys,
          selectedKeys,
          confirm,
          clearFilters,
          column,
        }"
      >
        <slot
          name="customFilterDropdown"
          v-bind="{
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
            column,
          }"
        ></slot>
      </template>
      <template
        v-if="$slots.bodyCell"
        #bodyCell="{ text, record, index, column }"
      >
        <slot name="bodyCell" v-bind="{ text, record, index, column }"></slot>
      </template>
      <template v-if="$slots.headerCell" #headerCell="{ title, column }">
        <slot name="headerCell" v-bind="{ title, column }"></slot>
      </template>
      <template
        v-if="$slots.expandedRowRender"
        #expandedRowRender="{ record, index, indent, expanded }"
      >
        <slot
          name="expandedRowRender"
          v-bind="{ record, index, indent, expanded }"
        ></slot>
      </template>
      <template v-if="$slots.emptyText" #emptyText>
        <slot name="emptyText"></slot>
      </template>
      <slot></slot>
    </a-table>
  </base-container>
</template>

<script setup>
  import BaseContainer from '@/libs/container/base/BaseContainer.vue';
  import { onBeforeUnmount, onMounted, watch, defineEmits } from 'vue';
  import '_libs/table/index.less';
  import {
    store,
    tableRef,
    defaultProps,
    getScroll,
  } from '_libs/container/table/service/tableContainer.js';

  const props = defineProps(defaultProps);
  watch(
    () => props.tableConfig,
    (value) => {
      store.tableConfig = Object.assign({}, store.tableConfig, props.tableConfig);
    },
    {
      immediate: true,
      deep: true,
    }
  );

  onMounted(() => {
    getScroll(props.fixHeight);
    window.addEventListener('resize', getScroll);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', getScroll);
  });
  const emitter = defineEmits(['tableChange']);
  const handleTableChange = (data) => {
    emitter('tableChange', data);
  };
</script>

<style scoped lang="less">
  @import '../../../assets/less/vars';

  .table-container {
    :deep(.ant-card-body) {
      padding: 0 4px;
    }

    :deep(.ant-card-head) {
      z-index: 1;
    }

    :deep(.ant-pagination) {
      margin-bottom: 16px;
    }
  }
</style>
