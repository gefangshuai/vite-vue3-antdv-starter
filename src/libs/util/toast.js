import { message } from 'ant-design-vue';

/**
 * 消息统一处理封装
 */
const useMessage = (text = undefined) => {
  return {
    /**
     * 删除提醒
     */
    delete(text2) {
      message.loading(text2 || text || '删除中...', 0);
      return this;
    },
    /**
     * 加载提醒
     */
    loading(text2) {
      message.loading(text2 || text || '加载中...', 0);
      return this;
    },
    /**
     * 处理提醒
     */
    processing(text2) {
      message.loading(text2 || text || '处理中...', 0);
      return this;
    },
    /**
     * 销毁消息
     */
    destroy() {
      message.destroy();
    },
    /**
     * 成功提醒
     */
    success(text2) {
      message.success(text2 || text);
    },
    /**
     * 警告提醒
     */
    warning(text2) {
      message.warning(text2 || text);
    },
    /**
     * 错误提醒
     */
    error(text2) {
      message.error(text2 || text);
    },
    /**
     * 请求操作失败提醒
     */
    warningResponse({ code, data: msg }) {
      const text = `${code} ${msg}`;
      message.destroy();
      message.warning(text);
      return text;
    },
  };
};

export { useMessage };
