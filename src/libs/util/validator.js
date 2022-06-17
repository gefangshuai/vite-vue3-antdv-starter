import { checkEmailValid, checkMobileValid } from '_libs/util/common.js';

export const emailValidator = (rule, value) => {
  if (!value) {
    return Promise.resolve();
  } else if (!checkEmailValid(value)) {
    return Promise.reject('请输入正确的邮箱');
  } else {
    return Promise.resolve();
  }
};
export const mobileValidator = (rule, value, callback) => {
  if (!value) {
    return Promise.resolve();
  } else if (!checkMobileValid(value)) {
    return Promise.reject('请输入正确的手机号码');
  } else {
    return Promise.resolve();
  }
};
