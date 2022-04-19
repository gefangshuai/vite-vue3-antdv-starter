<template>
  <tree-container
    @treeSelect="handleTreeSelect"
    title="TreeContainer"
    :tree-config="treeConfig"
  >
    <template v-slot:extra>
      <a-button type="primary">Add Item</a-button>
    </template>
    <a-result
      status="success"
      title="Successfully Purchased Cloud Server ECS!"
      sub-title="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
    >
      <template #extra>
        <a-button key="console" type="primary">Go Console</a-button>
        <a-button key="buy">Buy Again</a-button>
      </template>
    </a-result>
  </tree-container>
</template>

<script setup>
  import TreeContainer from '_libs/container/tree/TreeContainer.vue';
  import { message } from 'ant-design-vue';

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
  const handleTreeSelect = ({ selectedKeys, e }) => {
    console.log(selectedKeys, e);
    message.success(`click ${selectedKeys}`);
  };
</script>

<style scoped></style>