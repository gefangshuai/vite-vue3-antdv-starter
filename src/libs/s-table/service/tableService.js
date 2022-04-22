import http from '@/core/http.js';
import clearObj from '@gefangshuai/frontend-utils/js/object/clearObj.js';

const loadTableData = ({ url, params }) => {
  console.log('loadTableData, params: ', params, 'url:', url);
  if (!url) return;
  return new Promise((resolve, reject) => {
    let pagination, dataSource;
    http
      .get(
        url,
        clearObj({
          params,
        })
      )
      .then((data) => {
        if (data instanceof Array) {
          pagination = false;
          dataSource = data;
        } else {
          dataSource = data.content;
          pagination = {
            pageSize: data.size,
            total: data.totalElements,
            current: data.number + 1,
          };
        }
        resolve({ data, dataSource, pagination });
      })
      .catch(reject);
  });
};

export { loadTableData };
