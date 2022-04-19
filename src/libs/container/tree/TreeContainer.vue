<template>
  <base-container class="tree-container">
    <template v-slot:title>
      <slot v-if="$slots.title" name="title"></slot>
      <span v-else>{{ title }}</span>
    </template>
    <template v-slot:extra v-if="$slots.extra">
      <slot name="extra"></slot>
    </template>

    <div class="tree-container-left" :style="{width: siderWidth + 'px'}">
      <a-tree v-bind="treeConfig" @select="handleTreeNodeSelect"></a-tree>
    </div>
    <div class="tree-container-main">
      <slot></slot>
    </div>
  </base-container>
</template>

<script setup>
  import BaseContainer from '_libs/container/base/BaseContainer.vue';

  const props = defineProps({
    title: {
      type: String,
    },
    /**
     * tree 容器宽度
     */
    siderWidth: {
      type: [Number, String],
      default: 300
    },
    treeConfig: {
      type: Object
    }
  });

  const emitter = defineEmits(['treeSelect'])

  const handleTreeNodeSelect = (selectedKeys, e) => {
    emitter('treeSelect', {selectedKeys, e})
  }
</script>

<style scoped lang="less">
  @import "../../../assets/less/vars";
  .tree-container {
    :deep(.ant-card-body) {
      padding: 0;
      display: flex;
      flex-direction: row;
    }
    .tree-container-left {
      height: 100%;
      border-right: 1px solid @border-color-split;
      //width: 300px;
    }
    .tree-container-main {
      flex: 1;
    }
    .tree-container-left, .tree-container-main {
      padding: @padding-md;
    }
  }
</style>
