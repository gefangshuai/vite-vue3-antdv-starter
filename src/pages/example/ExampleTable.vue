<template>
  <s-table :config="tableConfig" ref="tableRef">
    <s-table-column title="Username" prop="name"></s-table-column>
    <s-table-column title="Email" prop="email"></s-table-column>
    <s-table-column title="Avatar" prop="avatar"></s-table-column>
    <s-table-column title="CreatedAt" prop="createdAt"></s-table-column>
    <s-table-column title="Operation" prop="id" :width="100">
      <template v-slot="{ index, record, text }">
        <a-button type="primary" @click="handleClick(record)" size="small"
          >操作
        </a-button>
      </template>
    </s-table-column>
  </s-table>
</template>

<script setup>
  import STable from '_comp/STable/STable.vue';
  import STableColumn from '_comp/STable/STableColumn.vue';
  import { onMounted, reactive, ref } from 'vue';
  import { message } from 'ant-design-vue';
  import http from '@/core/http.js';

  const count = ref(1);
  const tableRef = ref(null);
  const loading = ref(false)
  const tableConfig = reactive({
    dataSource: [],
    loading: true,
    // pagination: false
  });

  const loadUser = () => {
    http.get(`/api/users`).then((res) => {
      tableConfig.dataSource = res.data;
      tableConfig.loading = false
    });
  };
  loadUser();
  const handleClick = (record) => {
    message.success(JSON.stringify(record));
  };
</script>

<style scoped></style>
