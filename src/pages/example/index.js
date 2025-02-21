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
        name: 'ExampleTable',
        path: 'table',
        component: () => import('@/pages/example/ExampleTable.vue'),
        meta: {
          breadcrumb: [
            {
              title: 'Container',
            },
            {
              title: 'ExampleTable',
            },
          ],
        },
      },
      {
        name: 'ExampleContainer',
        meta: {
          breadcrumb: [
            {
              title: 'Container',
            },
            {
              title: 'ExampleContainer',
            },
          ],
        },
        path: 'container',
        component: () => import('@/pages/example/ExampleContainer.vue'),
      },
      {
        name: 'ExampleTableContainer',
        meta: {
          breadcrumb: [
            {
              title: 'Container',
            },
            {
              title: 'ExampleTableContainer',
            },
          ],
        },
        path: 'table-container',
        component: () => import('@/pages/example/ExampleTableContainer.vue'),
      },
      {
        name: 'ExampleTreeContainer',
        meta: {
          breadcrumb: [
            {
              title: 'Container',
            },
            {
              title: 'ExampleTreeContainer',
            },
          ],
        },
        path: 'tree-container',
        component: () => import('@/pages/example/ExampleTreeContainer.vue'),
      },
      {
        name: 'ExampleTreeTableContainer',
        meta: {
          breadcrumb: [
            {
              title: 'Container',
            },
            {
              title: 'ExampleTreeTableContainer',
            },
          ],
        },
        path: 'tree-table-container',
        component: () =>
          import('@/pages/example/ExampleTreeTableContainer.vue'),
      },
      {
        name: 'ExampleExtraTableContainer',
        meta: {
          breadcrumb: [
            {
              title: 'ExampleExtraTableContainer',
            },
          ],
        },
        path: 'extra-container/extra-table-container',
        component: () =>
          import('@/pages/example/extra/ExampleExtraTableContainer.vue'),
      },
      {
        name: 'ExampleModal',
        meta: {
          breadcrumb: [
            {
              title: 'ExampleModal',
            },
          ],
        },
        path: 'modal',
        component: () => import('@/pages/example/ExampleModal.vue'),
      },
      {
        name: 'ExampleUtils',
        meta: {
          breadcrumb: [
            {
              title: 'ExampleUtils',
            },
          ],
        },
        path: 'utils',
        component: () => import('@/pages/example/ExampleUtils.vue'),
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
    key: 'ExampleContainer',
    icon: LayoutOutlined,
    title: 'Container',
    children: [
      {
        key: 'ExampleBaseContainer',
        title: 'BaseContainer',
        url: '/example/container',
        alias: ['ExampleContainer'], // 别名，可以设置多个别名，匹配多个 Route Name
      },
      {
        key: 'ExampleTableContainer',
        title: 'TableContainer',
        url: '/example/table-container',
      },
      {
        key: 'ExampleTreeContainer',
        title: 'TreeContainer',
        url: '/example/tree-container',
      },
      {
        key: 'ExampleTreeTableContainer',
        title: 'TreeTableContainer',
        url: '/example/tree-table-container',
      },
    ],
  },
  {
    key: 'ExtraContainer',
    icon: LayoutOutlined,
    title: 'ExtraContainer',
    children: [
    ],
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
