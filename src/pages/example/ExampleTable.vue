<template>
  <a-table
    class="table-fix-pagination"
    ref="tableRef"
    :data-source="tableConfig.dataSource"
    :scroll="tableConfig.scroll"
  >
    <template #expandedRowRender="{ record }">
      <p class="padding-left-lg">
        {{ record.name }}
      </p>
    </template>
    <template #emptyText>
      <a-empty description="暂无数据"></a-empty>
    </template>
    <template #headerCell="{ column }">
      <template v-if="column.prop === 'name'">
        <span style="color: #1890ff">Name</span>
      </template>
    </template>
    <template #customFilterIcon="{ filtered }">
      <search-outlined :style="{ color: filtered ? '#108ee9' : undefined }" />
    </template>
    <template
      #customFilterDropdown="{
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
        column,
      }"
    >
      <div style="padding: 8px">
        <a-input
          ref="searchInput"
          :placeholder="`Search ${column.dataIndex}`"
          :value="selectedKeys[0]"
          style="width: 188px; margin-bottom: 8px; display: block"
          @change="
            (e) => setSelectedKeys(e.target.value ? [e.target.value] : [])
          "
        />
        <a-button
          type="primary"
          size="small"
          style="width: 90px; margin-right: 8px"
          @click="() => confirm()"
        >
          <template #icon>
            <SearchOutlined />
          </template>
          Search
        </a-button>
        <a-button
          size="small"
          style="width: 90px"
          @click="() => clearFilters()"
        >
          Reset
        </a-button>
      </div>
    </template>
    <a-table-column
      title="Username"
      data-index="name"
      :sorter="handleSort"
      :width="300"
    ></a-table-column>
    <a-table-column
      title="Email"
      data-index="email"
      :onFilter="handleEmailFilter"
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
    ></a-table-column>
    <a-table-column title="Avatar" data-index="avatar">
      <template v-slot="{ text }">
        <a-avatar></a-avatar>
      </template>
    </a-table-column>
    <a-table-column
      title="CreatedAt"
      data-index="createdAt"
      :customFilterDropdown="true"
    ></a-table-column>
    <a-table-column title="Operation" data-index="id" :width="100">
      <template v-slot="{ index, record, text }">
        <a-button type="primary" @click="handleClick(record)" size="small"
          >操作
        </a-button>
      </template>
    </a-table-column>
  </a-table>
</template>

<script setup>
  import { computed, reactive, ref } from 'vue';
  import { message } from 'ant-design-vue';
  import http from '@/core/http.js';
  import { SearchOutlined } from '@ant-design/icons-vue';
  import { useScroll } from '_libs/table/index.js';
  import '_libs/table/index.less';

  const count = ref(1);
  const tableRef = ref(null);
  const loading = ref(false);
  const tableConfig = reactive({
    dataSource: [],
    loading: true,
    scroll: computed(() => useScroll({ tableRef, offset: 48 })),
    // pagination: false
  });
  const handleSort = (a, b) => {
    return a.name.length - b.name.length;
  };
  const handleEmailFilter = (value, record) => {
    return record.email.indexOf(value) > -1;
  };
  const loadUser = () => {
    http.get(`/api/users`).then((res) => {
      tableConfig.dataSource = res.data;
      tableConfig.loading = false;
    });
  };
  loadUser();
  const handleClick = (record) => {
    message.success(JSON.stringify(record));
  };
</script>

<style scoped></style>
