import { reactive } from 'vue';
import Http from '@/core/http.js';

const tableConfig = reactive({
  loading: true,
  dataSource: [],
  pagination: true,
});

const loadData = (url) => {
  Http.get(url).then((res) => {
    if (res.data instanceof Array) {
      tableConfig.pagination = false;
      tableConfig.dataSource = res.data;
    } else {
      tableConfig.dataSource = res.data.content;
      tableConfig.pagination = {
        pageSize: res.data.size,
        total: res.data.totalElements,
        current: res.data.number + 1,
      };
    }
    tableConfig.loading = false;
  });
};

export { loadData, tableConfig };
