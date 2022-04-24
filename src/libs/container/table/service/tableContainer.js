import { reactive, ref } from 'vue';
import _isNumber from 'lodash/isNumber.js';
import { useScroll } from '_libs/table/index.js';

const tableRef = ref(null);

const defaultProps = {
  tableConfig: {
    type: Object,
    default: {},
  },
  title: {
    type: String,
  },
  hideHead: {
    type: Boolean,
  },
  fixHeight: {
    type: [Number, Boolean],
    default: 64,
  },
};
const store = reactive({
  tableConfig: {
    rowKey: 'id',
    scroll: {
      scrollToFirstRowOnChange: true,
      x: 'max-content',
    },
  },
});

const getScroll = (fixHeight) => {
  store.tableConfig.scroll = _isNumber(fixHeight)
    ? useScroll({ tableRef: tableRef, offset: fixHeight })
    : {
        scrollToFirstRowOnChange: true,
        x: 'max-content',
      };
};

export { store, tableRef, defaultProps, getScroll };
