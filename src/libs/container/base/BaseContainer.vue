<template>
  <a-card
    :class="['base-container', hideHead ? 'no-head' : '']"
    :title="title"
    :bordered="false"
  >
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
  import { computed, useSlots } from 'vue';

  const slots = useSlots();

  const props = defineProps({
    title: {
      type: String,
    },
    hideHead: {
      type: Boolean
    }
  });

</script>

<style scoped lang="less">
  .base-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 0;

    &.no-head {
      :deep(.ant-card-head) {
        display: none;
      }
    }

    :deep(.ant-card-head) {
      min-height: 48px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 0;
    }

    :deep(.ant-card-head-title) {
      padding: 8px 0;
      font-weight: normal;
    }

    :deep(.ant-card-extra) {
      padding: 8px 0;
    }

    :deep(.ant-card-body) {
      border-radius: 0;
      overflow: auto;
      flex: 1;
    }
  }
</style>
