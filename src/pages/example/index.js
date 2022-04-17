import {
  CreditCardOutlined,
  HomeOutlined,
  TableOutlined,
  ToolOutlined,
  LayoutOutlined,
  MenuOutlined,
} from '@ant-design/icons-vue';

const pages = [
  {
    name: 'Example',
    path: '/example',
    component: () => import('@/pages/example/Example.vue'),
    children: [
      {
        name: 'ExampleHome',
        path: 'home',
        component: () => import('@/pages/example/ExampleHome.vue'),
      },
      {
        name: 'ExampleModal',
        path: 'modal',
        component: () => import('@/pages/example/ExampleModal.vue'),
      },
    ],
  },
];
const menus = [
  {
    key: 'ExampleHome',
    icon: HomeOutlined,
    title: 'Home',
    url: '/example/home',
  },
  {
    key: 'ExampleLayout',
    icon: LayoutOutlined,
    title: 'Layout',
    url: '/example/layout',
  },
  {
    key: 'ExampleTable',
    icon: TableOutlined,
    title: 'Table',
    url: '/example/table',
  },
  {
    key: 'ExampleModal',
    icon: CreditCardOutlined,
    title: 'Modal',
    url: '/example/modal',
  },
  {
    key: 'ExampleUtils',
    icon: ToolOutlined,
    title: 'Utils',
    url: '/example/utils',
  },
  {
    key: 'MenuTest',
    icon: MenuOutlined,
    title: 'MenuTest',
    children: [
      {
        title: 'Sub Menu1',
        key: 's1',
        url: '/example/home',
      },
      {
        title: 'Sub Menu2',
        key: 's2',
        url: '/example/modal',
      },
    ],
  },
];
export { pages, menus };
