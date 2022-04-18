<template>
  <a-table v-bind="store.tableConfig"></a-table>
  <slot></slot>
</template>

<script setup>
  import { computed, reactive, useSlots, watch } from 'vue';

  const store = reactive({
    tableConfig: {},
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
      console.log('变化了');
      store.tableConfig.columns = useSlots()
        .default()
        .map((o) => {
          const item = Object.assign({}, o.props, { dataIndex: o.props.prop });
          if (o.children) {
            item.customRender = ({ text, record, index, column }) => {
              return o.children.default({ text, record, index, column });
            };
          }
          return item;
        });
    },
    {
      immediate: true,
      deep: true,
    }
  );
</script>

<style scoped></style>
