<template>
  <a-card class="base-container">
    <template v-slot:title>
      <slot v-if="$slots.title" name="title"></slot>
      <span v-else>{{ title }}</span>
    </template>
    <template v-slot:extra>
      <slot name="extra"></slot>
    </template>
    <slot></slot>
  </a-card>
</template>

<script setup>
  const props = defineProps({
    title: {
      type: String,
    },
  });
</script>

<style scoped lang="less">
  .base-container {
    height: 100%;
    display: flex;
    flex-direction: column;

    :deep(.ant-card-head-title) {
      padding: 8px 0;
      font-weight: normal;
    }

    :deep(.ant-card-extra) {
      padding: 8px 0;
    }

    :deep(.ant-card-body) {
      overflow: auto;
      flex: 1;
    }
  }
</style>
