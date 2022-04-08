import dayjs from 'dayjs';

export default {
  install(Vue) {
    Vue.config.globalProperties.$filter = {
      getDateTimeFormat(time, pattern = 'YYYY-MM-DD HH:mm') {
        if (time) return dayjs(time).format(pattern);
        else return '';
      },
    };
  },
};
