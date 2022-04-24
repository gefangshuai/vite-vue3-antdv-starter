import {reactive} from "vue";
import Http from "@/core/http.js";

const computedHeight = (tableEl, offset) => {
  const parentNode = tableEl.parentNode;
  console.log('parentNode', parentNode);
  if (parentNode) {
    const computedStyle = getComputedStyle(parentNode);
    const offsetTop =
      tableEl.getBoundingClientRect().top -
      parentNode.getBoundingClientRect().top;

    const padding = parseInt(computedStyle.paddingBottom) + parseInt(computedStyle.paddingTop);
    const tableHeaderHeight = tableEl
      .querySelector('.ant-table-thead')
      .getBoundingClientRect().height; // 表头高度

    const parentNodeContentHeight =
      parentNode.getBoundingClientRect().height - padding;
    let height = parentNodeContentHeight - tableHeaderHeight;
    console.log('parentNodeContentHeight', parentNodeContentHeight);
    if (offset) {
      height = height - offset;
    }
    return height;
  }
};
const useScroll = ({ tableRef, offset }) => {
  console.log('tableRef', tableRef.value)
  if (tableRef.value) {
    console.log(`fix table scroll, offset: ${offset}`);
    return {
      scrollToFirstRowOnChange: true,
      x: 'max-content',
      y: computedHeight(tableRef.value.$el, offset),
    };
  }
};


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


export { useScroll, loadData, tableConfig };
