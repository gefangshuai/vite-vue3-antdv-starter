<template>
  <a-table v-bind="store.tableConfig"></a-table>
  <slot></slot>
</template>

<script setup>
  import { computed, reactive, useSlots, watch, defineExpose } from 'vue';

  const store = reactive({
    tableConfig: {
      pagination: {
        position: ['bottomCenter']
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

  defineExpose({
    parseColumns,
  });
</script>

<style scoped></style>