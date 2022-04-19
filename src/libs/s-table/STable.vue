<template>
  <a-table class="s-table" ref="tableRef" v-bind="store.tableConfig">
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
    <!--<template
      v-if="$slots.expandedRowRender"
      #expandedRowRender="{ record, index, indent, expanded }"
    >
      <slot
        name="expandedRowRender"
        v-bind="{ record, index, indent, expanded }"
      ></slot>
    </template>-->
    <template v-if="$slots.headerCell" #headerCell="{ title, column }">
      <slot name="headerCell" v-bind="{ title, column }"></slot>
    </template>
    <template v-if="$slots.emptyText" #emptyText>
      <slot name="emptyText"></slot>
    </template>
  </a-table>
  <slot></slot>
</template>

<script setup>
  import {
    reactive,
    useSlots,
    watch,
    onMounted,
    ref,
    onBeforeUnmount,
  } from 'vue';

  const tableRef = ref(null);

  const store = reactive({
    tableConfig: {
      pagination: {
        position: ['bottomCenter'],
      },
    },
    columns: [],
  });

  const props = defineProps({
    config: {
      type: Object,
      default: {
        dataSource: [],
      },
    },
    autoHeight: {
      type: Boolean,
      default: true,
    },
    inContainer: {
      type: Boolean,
      default: false,
    },
  });

  const getSlots = () =>
    props.inContainer ? useSlots().default()[0].children : useSlots().default();

  const parseColumns = () => {
    store.tableConfig.columns = getSlots().map((o) => {
      const item = Object.assign({}, o.props, { dataIndex: o.props.prop });
      if (o.children && o.children.default) {
        item.customRender = ({ text, record, index, column }) => {
          return o.children.default({ text, record, index, column });
        };
      }
      return item;
    });
  };

  watch(
    () => props.config,
    () => {
      store.tableConfig = Object.assign({}, store.tableConfig, props.config);
    },
    {
      deep: true,
      immediate: true,
    }
  );

  parseColumns();

  const computedAutoHeight = () => {
    if (
      props.autoHeight &&
      tableRef.value.$el &&
      tableRef.value.$el.parentNode
    ) {
      const parentNode = tableRef.value.$el.parentNode;
      if (parentNode) {
        const computedStyle = getComputedStyle(parentNode);
        const padding =
          parseInt(computedStyle.paddingTop) +
          parseInt(computedStyle.paddingBottom);
        const tableHeaderHeight = 55; // 表头高度
        const paginationHeight = 36 + 16 * (props.inContainer ? 2 : 1); // 分页高度
        let height =
          parentNode.getBoundingClientRect().height -
          padding -
          tableHeaderHeight;
        if (store.tableConfig.pagination) {
          height = height - paginationHeight;
        }
        store.tableConfig = Object.assign({}, store.tableConfig, {
          scroll: {
            x: true,
            scrollToFirstRowOnChange: true,
            y: height,
          },
        });
      }
    }
  };

  onMounted(() => {
    computedAutoHeight();

    window.addEventListener('resize', computedAutoHeight);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('reset', computedAutoHeight);
  });

  defineExpose({
    parseColumns,
  });
</script>

<style scoped lang="less">
  .s-table {
    :deep(.ant-table) {
      border-radius: 0px;
    }

    :deep(.ant-pagination) {
      margin-bottom: 0;
    }
  }
</style>
