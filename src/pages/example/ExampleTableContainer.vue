<template>
  <table-container :config="tableConfig" title="用户列表">
    <template v-slot:extra>
      <a-button type="primary">Add User</a-button>
    </template>
    <s-table-column title="Username" prop="name"></s-table-column>
    <s-table-column title="Email" prop="email"></s-table-column>
    <s-table-column title="Avatar" prop="avatar"></s-table-column>
    <s-table-column title="CreatedAt" prop="createdAt"></s-table-column>
  </table-container>
</template>

<script setup>
  import TableContainer from '_comp/container/table/TableContainer.vue';
  import http from '@/core/http.js';
  import { reactive } from 'vue';
  import STableColumn from '_comp/STable/STableColumn.vue';
  import { LayoutOutlined } from '@ant-design/icons-vue';

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
