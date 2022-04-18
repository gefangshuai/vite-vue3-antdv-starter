<template>
  <s-table :config="tableConfig">
    <s-table-column title="用户名" prop="name"></s-table-column>
    <s-table-column title="电子邮箱" prop="email"></s-table-column>
    <s-table-column title="生日" prop="birthday"></s-table-column>
    <s-table-column title="操作" prop="id" :width="100">
      <template v-slot="{ index, record, text }">
        <a-button type="primary" size="small">操作</a-button>
      </template>
    </s-table-column>
  </s-table>
</template>

<script setup>
  import STable from '_comp/STable/STable.vue';
  import STableColumn from '_comp/STable/STableColumn.vue';
  import { reactive } from 'vue';

  const tableConfig = reactive({
    dataSource: [
      {
        id: 1,
        name: '张三',
        email: 'zhangsan@163.com',
        birthday: '1988-04-20',
      },
      {
        id: 2,
        name: '王五',
        email: 'lisi@163.com',
        birthday: '1958-05-20',
      },
      {
        id: 3,
        name: '李四4',
        email: 'lisi@163.com',
        birthday: '1958-05-20',
      },
    ],
  });
</script>

<style scoped></style>
