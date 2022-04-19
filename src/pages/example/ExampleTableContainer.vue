<template>
  <table-container :config="tableConfig" title="用户列表">
    <template #emptyText>
      <a-empty description="暂无数据"></a-empty>
    </template>
    <template #headerCell="{ column }">
      <template v-if="column.prop === 'email'">
        <span style="color: #1890ff">Name</span>
      </template>
    </template>
    <template #customFilterIcon="{ filtered, column }">
      <filter-filled
        v-if="column.prop === 'name'"
        :style="{ color: filtered ? '#108ee9' : undefined }"
      />
      <search-outlined
        v-else
        :style="{ color: filtered ? '#108ee9' : undefined }"
      />
    </template>

    <template v-slot:extra>
      <a-button type="primary">Add User</a-button>
    </template>
    <s-table-column
      title="Username"
      prop="name"
      :filters="[
        {
          text: 'A',
          value: 'A',
        },
        {
          text: 'B',
          value: 'B',
        },
        {
          text: 'C',
          value: 'C',
        },
      ]"
      :onFilter="handleEmailFilter"
    ></s-table-column>
    <s-table-column title="Email" prop="email"></s-table-column>
    <s-table-column title="Avatar" prop="avatar"></s-table-column>
    <s-table-column title="CreatedAt" prop="createdAt"></s-table-column>
  </table-container>
</template>

<script setup>
  import TableContainer from '_libs/container/table/TableContainer.vue';
  import http from '@/core/http.js';
  import { reactive } from 'vue';
  import STableColumn from '_libs/s-table/STableColumn.vue';
  import { SearchOutlined, FilterFilled } from '@ant-design/icons-vue';

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
  const handleEmailFilter = (value, record) => {
    return record.name.startsWith(value)
  };
  loadUser();
</script>

<style scoped></style>
