<template>
  <tree-table-container
    :tree-config="treeConfig"
    :table-config="tableConfig"
    title="Tree Table Container"
  >
    <template #expandedRowRender="{ record }">
      <p class="padding-left-lg">
        {{ record.name }}
      </p>
    </template>

    <template v-slot:extra>
      <a-button type="primary">Add User</a-button>
    </template>
    <a-table-column title="Username" data-index="name"></a-table-column>
    <a-table-column title="Email" data-index="email"></a-table-column>
    <a-table-column title="Avatar" data-index="avatar"></a-table-column>
    <a-table-column
      title="CreatedAt"
      data-index="createdAt"
      fixed="right"
    ></a-table-column>
  </tree-table-container>
</template>

<script setup>
  import TreeTableContainer from '_libs/container/tree-table/TreeTableContainer.vue';
  import { reactive } from 'vue';
  import http from '@/core/http.js';

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

  const tableConfig = reactive({
    dataSource: [],
    loading: true,
  });
  const loadUser = () => {
    http.get(`/api/users`).then((res) => {
      tableConfig.dataSource = res.data;
      tableConfig.loading = false;
    });
  };
  loadUser();
</script>

<style scoped></style>
