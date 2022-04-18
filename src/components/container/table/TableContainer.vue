<template>
  <base-container class="table-container">
    <template v-slot:title>
      <slot v-if="$slots.title" name="title"></slot>
      <span v-else>{{ title }}</span>
    </template>
    <template v-slot:extra v-if="$slots.extra">
      <slot name="extra"></slot>
    </template>
    <s-table :config="config" in-container>
      <slot></slot>
    </s-table>
  </base-container>
</template>

<script setup>
  import BaseContainer from '_comp/container/base/BaseContainer.vue';
  import STable from '_comp/STable/STable.vue';

  defineProps({
    config: {
      type: Object,
      default: {},
    },
    title: {
      type: String,
    },
  });
</script>

<style scoped lang="less">
  .table-container {
    :deep(.ant-card-body) {
      padding: 0;
    }
    :deep(.ant-pagination) {
      margin-bottom: 16px;
    }
  }
</style>
