<template>
  <base-container class="extra-table-container">
    <template v-slot:title>
      <slot v-if="$slots.title" name="title"></slot>
      <span v-else>{{ title }}</span>
    </template>
    <template v-slot:extra v-if="$slots.extra">
      <slot name="extra"></slot>
    </template>
    <s-table :config="tableConfig" in-container>
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
    </s-table>
  </base-container>
</template>

<script setup>
  import { tableConfig, loadData } from './service/extraTableContainer.js';
  import BaseContainer from '_libs/container/base/BaseContainer.vue';
  import STable from '_libs/s-table/STable.vue';

  const props = defineProps({
    url: {
      type: String,
      required: true,
    },
    title: {
      type: String,
    },
  });

  loadData(props.url);
</script>

<style scoped lang="less">
  @import '../../../assets/less/vars';

  .extra-table-container {
    :deep(.ant-card-body) {
      padding: 0;
    }

    :deep(.ant-card-head) {
      z-index: 1;
    }

    :deep(.ant-pagination) {
      margin-bottom: 16px;
    }
  }
</style>
