<template>
  <div
    class="s-table"
    ref="tableRef"
    :style="{ height: store.containerHeight, width: store.containerWidth }"
  >
    <a-table v-bind="store.tableConfig" @change="handleChange">
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
      <template
        v-if="$slots.expandedRowRender"
        #expandedRowRender="{ record, index, indent, expanded }"
      >
        <slot
          name="expandedRowRender"
          v-bind="{ record, index, indent, expanded }"
        ></slot>
      </template>
      <template v-if="$slots.headerCell" #headerCell="{ title, column }">
        <slot name="headerCell" v-bind="{ title, column }"></slot>
      </template>
      <template v-if="$slots.emptyText" #emptyText>
        <slot name="emptyText"></slot>
      </template>
    </a-table>
  </div>
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
  import _assign from 'lodash/assign';

  const tableRef = ref(null);

  const store = reactive({
    containerHeight: 'auto',
    containerWidth: 'auto',
    tableConfig: {
      rowKey: 'id',
      pagination: {
        position: ['bottomCenter'],
        showSizeChanger: true,
        showQuickJumper: true,
      },
    },
  });

  const defaultPagination = {
    position: ['bottomCenter'],
    showSizeChanger: true,
    showQuickJumper: true,
  };

  const props = defineProps({
    config: {
      type: Object,
      default: {
        dataSource: [],
        rowKey: 'id',
        pagination: false,
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
      const item = _assign(o.props, { dataIndex: o.props.prop });
      if (o.children && o.children.default) {
        item.customRender = ({ text, record, index, column }) => {
          return o.children.default({ text, record, index, column });
        };
      }
      return item;
    });
  };
  parseColumns();

  const computedAutoHeight = () => {
    if (
      tableRef &&
      tableRef.value &&
      props.autoHeight &&
      tableRef.value.parentNode
    ) {
      const parentNode = tableRef.value.parentNode;
      if (parentNode) {
        const computedStyle = getComputedStyle(parentNode);
        const offsetTop =
          tableRef.value.getBoundingClientRect().top -
          parentNode.getBoundingClientRect().top;
        const padding = parseInt(computedStyle.paddingBottom);
        const tableHeaderHeight = tableRef.value
          .querySelector('.ant-table-thead')
          .getBoundingClientRect().height; // 表头高度
        let height =
          parentNode.getBoundingClientRect().height -
          offsetTop -
          padding -
          tableHeaderHeight;
        if (store.tableConfig.pagination) {
          const paginationHeight = 32 + 16; // 分页高度
          height = height - paginationHeight;
        }
        store.tableConfig = _assign(store.tableConfig, {
          scroll: {
            x: 'max-content',
            scrollToFirstRowOnChange: true,
            y: height,
          },
        });

        const width =
          parentNode.getBoundingClientRect().width -
          parseInt(computedStyle.paddingLeft) -
          parseInt(computedStyle.paddingRight);
        store.containerHeight = `${height}px`;
        store.containerWidth = `${width}px`;
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

  const parseConfig = () => {
    store.tableConfig = _assign(store.tableConfig, props.config);
    // 处理默认分页
    if (store.tableConfig.pagination) {
      Object.keys(defaultPagination).forEach((key) => {
        store.tableConfig.pagination[key] =
          store.tableConfig.pagination[key] || defaultPagination[key];
      });
    }
  };

  watch(
    () => props.config,
    () => {
      parseConfig();
      computedAutoHeight();
    },
    {
      deep: true,
      immediate: true,
    }
  );
  const emitter = defineEmits(['change']);
  const handleChange = (pagination, filters, sorter) => {
    emitter('change', { pagination, filters, sorter });
  };
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
