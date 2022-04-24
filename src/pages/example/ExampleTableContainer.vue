<template>
  <table-container :config="tableConfig" title="用户列表">
    <template #expandedRowRender="{ record }">
      <p class="padding-left-lg">
        {{ record.name }}
      </p>
    </template>
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
    <a-table-column
      title="Username"
      data-index="name"
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
    ></a-table-column>
    <a-table-column title="Email" data-index="email"></a-table-column>
    <a-table-column title="Avatar" data-index="avatar"></a-table-column>
    <a-table-column title="CreatedAt" data-index="createdAt"></a-table-column>
  </table-container>
</template>

<script setup>
  import TableContainer from '_libs/container/table/TableContainer.vue';
  import http from '@/core/http.js';
  import { reactive } from 'vue';
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
    return record.name.startsWith(value);
  };
  loadUser();
</script>

<style scoped></style>
