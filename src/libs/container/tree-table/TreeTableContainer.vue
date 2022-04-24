<template>
  <tree-container
    :sider-width="siderWidth"
    :hide-head="hideHead"
    class="tree-table-container"
    :treeConfig="store.treeConfig"
    @treeSelect="handleTreeSelect"
  >
    <!--Slot-->
    <template #icon="{ key, selected }" v-if="$slots.treeIcon">
      <slot name="treeIcon" v-bind="{ key, selected }"></slot>
    </template>
    <template
      v-if="$slots.switcherIcon"
      #switcherIcon="{
        active,
        checked,
        expanded,
        loading,
        selected,
        halfChecked,
        title,
        key,
        children,
        dataRef,
        data,
        defaultIcon,
        switcherCls,
      }"
    >
      <slot
        name="switcherIcon"
        v-bind="{
          active,
          checked,
          expanded,
          loading,
          selected,
          halfChecked,
          title,
          key,
          children,
          dataRef,
          data,
          defaultIcon,
          switcherCls,
        }"
      ></slot>
    </template>
    <template v-slot:title>
      <slot v-if="$slots.title" name="title"></slot>
      <span v-else>{{ title }}</span>
    </template>
    <template v-slot:extra v-if="$slots.extra">
      <slot name="extra"></slot>
    </template>
    <!--End-->
    <slot name="mainHead"></slot>

    <a-table
      v-bind="store.tableConfig"
      @change="handleTableChange"
      ref="tableRef"
      class="table-fix-pagination"
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
  </tree-container>
</template>

<script setup>
  import TreeContainer from '_libs/container/tree/TreeContainer.vue';
  import { onBeforeUnmount, onMounted, watch, defineEmits } from 'vue';
  import '_libs/table/index.less';
  import {
    store,
    tableRef,
    defaultProps,
    getScroll,
  } from '_libs/container/table/service/tableContainer.js';

  store.treeConfig = {};
  const props = defineProps(
    Object.assign({}, defaultProps, {
      treeConfig: {
        type: Object,
        default: {},
      },
      siderWidth: {
        type: [Number, String],
        default: 300,
      },
    })
  );

  watch(
    () => props.tableConfig,
    (value) => {
      store.tableConfig = Object.assign(
        {},
        store.tableConfig,
        props.tableConfig
      );
      store.treeConfig = Object.assign({}, store.treeConfig, props.treeConfig);
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

  const emitter = defineEmits(['treeSelect', 'tableChange']);
  const handleTreeSelect = ({ selectedKeys, e }) => {
    emitter('treeSelect', { selectedKeys, e });
  };
  const handleTableChange = (data) => {
    emitter('tableChange', data);
  };
</script>

<style scoped lang="less">
  @import '../../../assets/less/vars';

  .tree-table-container {
    .tree-table-container-main {
      padding: @padding-lg;
    }

    :deep(.ant-card-head) {
      z-index: 1;
    }

    :deep(.tree-container-main) {
      padding: 0;
    }
  }
</style>
