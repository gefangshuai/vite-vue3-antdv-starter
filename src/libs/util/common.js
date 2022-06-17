/**
 * 检查手机号是否合法
 * @param phoneNumber
 * @returns {boolean}
 */
import { isEmpty } from 'lodash';
import clearObj from '@gefangshuai/frontend-utils/js/object/clearObj.js';

export const checkMobileValid = phoneNumber => {
  return /^1[345789]\d{9}$/.test(phoneNumber);
};

/**
 * 检查邮箱是否合法
 * @param email 邮箱
 * @returns {boolean}
 */
export const checkEmailValid = email => {
  let regExp = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
  return regExp.test(email);
};
/**
 * 扩展清空对象的空属性
 * @param obj
 * @returns {*}
 */
export const clearObjExpand = obj => {
  if (!isEmpty(obj)) {
    return clearObj(obj);
  }
  return obj;
};

/**
 * 获取文件格式
 * @param filename
 * @returns {string|*}
 */
export const getFileType = filename => {
  const type = filename.split('.').pop();
  if (type) {
    return type.toLowerCase();
  } else {
    return type;
  }
};
