<template>
  <tree-container
    class="tree-table-container"
    :treeConfig="treeConfig"
    @treeSelect="handleTreeSelect"
  >
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
  </tree-container>
</template>

<script setup>
  import TreeContainer from '_libs/container/tree/TreeContainer.vue';
  import STable from '_libs/s-table/STable.vue';

  defineProps({
    tableConfig: {
      type: Object,
      default: {},
    },
    treeConfig: {
      type: Object,
      default: {},
    },
    title: {
      type: String,
    },
  });
  const emitter = defineEmits(['treeSelect']);
  const handleTreeSelect = ({ selectedKeys, e }) => {
    emitter('treeSelect', { selectedKeys, e });
  };
</script>

<style scoped lang="less">
  @import '../../../assets/less/vars';

  .tree-table-container {
    :deep(.ant-card-head) {
      z-index: 1;
    }
    :deep(.tree-container-main) {
      padding: 0;
    }
  }
</style>
