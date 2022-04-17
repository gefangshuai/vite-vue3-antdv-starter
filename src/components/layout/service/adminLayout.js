import Router from '@/router/index.js';

const handleMenuClick = (menu) => {
  if (menu.url) Router.push(menu.url);
};

export { handleMenuClick };
