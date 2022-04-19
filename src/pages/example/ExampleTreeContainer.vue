<template>
  <tree-container @treeSelect="handleTreeSelect"
    title="TreeContainer"
    :tree-config="treeConfig"
  >
    <example-table-container></example-table-container>
  </tree-container>
</template>

<script setup>
  import TreeContainer from '_libs/container/tree/TreeContainer.vue';
  import ExampleTableContainer from "@/pages/example/ExampleTableContainer.vue";
  import {message} from "ant-design-vue";

  const treeConfig = {
    defaultExpandAll: true,
    treeData: [
      {
        title: 'parent 1',
        key: '0-0',
        children: [
          {
            title: 'parent 1-0',
            key: '0-0-0',
            disabled: true,
            children: [
              { title: 'leaf', key: '0-0-0-0', disableCheckbox: true },
              { title: 'leaf', key: '0-0-0-1' },
            ],
          },
          {
            title: 'parent 1-1',
            key: '0-0-1',
            children: [{ key: '0-0-1-0', title: 'sss' }],
          },
        ],
      },
    ],
  };
  const handleTreeSelect = ({selectedKeys, e}) => {
    console.log(selectedKeys, e)
    message.success(`click ${selectedKeys}`)
  }
</script>

<style scoped></style>
