import { reactive } from 'vue';
import Http from '@/core/http.js';

const tableConfig = reactive({
  loading: true,
  dataSource: [],
});

const loadData = (url) => {
  Http.get(url).then((res) => {
    tableConfig.dataSource = res.data;
    tableConfig.loading = false;
  });
};

export { loadData, tableConfig };
