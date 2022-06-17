import { Modal } from 'ant-design-vue';

const useModal = () => {
  return {
    delete(title, content) {
      return new Promise((resolve) => {
        Modal.confirm({
          title: title || '删除确认',
          content: content || '确认删除当前记录吗？',
          okText: '确认删除',
          cancelText: '再想想？',
          onOk: () => {
            resolve();
          },
        });
      });
    },
    confirm(content) {
      return new Promise((resolve) => {
        Modal.confirm({
          title: '操作确认',
          content: content,
          okText: '确认操作',
          cancelText: '再想想？',
          onOk: () => {
            resolve();
          },
        });
      });
    },
    info(title, content) {
      Modal.info({
        title: title || '提醒',
        content: content
      })
    }
  };
};

export { useModal };
