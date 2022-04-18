<template>
  <a-table class="s-table" ref="tableRef" v-bind="store.tableConfig"></a-table>
  <slot></slot>
</template>

<script setup>
  import {
    reactive,
    useSlots,
    watch,
    defineExpose,
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
  });

  const getSlots = () => useSlots().default();

  const parseColumns = () => {
    store.tableConfig.columns = getSlots().map((o) => {
      const item = Object.assign({}, o.props, { dataIndex: o.props.prop });
      if (o.children) {
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

  watch(
    () => useSlots().default(),
    () => {
      parseColumns();
    },
    {
      immediate: true,
      deep: true,
    }
  );

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
        const paginationHeight = 36 + 16 * 1; // 分页高度
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
