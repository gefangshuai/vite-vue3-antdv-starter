import Router from '@/router/index.js';

export default {
  install(app, options) {
    app.directive('link', {
      // 当被绑定的元素挂载到 DOM 中时……
      mounted(el, binding) {
        el._CLICK_ = (e) => {
          if (binding.modifiers && binding.modifiers.href) {
            location.href = binding.value;
          } else {
            Router.push(binding.value);
          }
        };
        el.addEventListener('click', el._CLICK_);
      },
      beforeUnmount(el) {
        if (el._CLICK_) el.removeEventListener('click', el._CLICK_);
      },
    });
  },
};
