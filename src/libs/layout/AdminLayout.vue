<template>
  <a-layout
    :class="['admin-layout', breadcrumb ? 'admin-layout-has-breadcrumb' : '']"
  >
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <div class="menu-container">
        <a-menu
          v-model:openKeys="state.openKeys"
          v-model:selectedKeys="state.selectedKeys"
          theme="dark"
          mode="inline"
        >
          <template v-for="menu in menus" :key="menu.key">
            <a-sub-menu
              v-if="menu.children && menu.children.length > 0"
              :key="menu.key"
            >
              <template #icon>
                <component v-if="menu.icon" :is="menu.icon" />
              </template>
              <template #title>{{ menu.title }}</template>
              <a-menu-item
                :key="subMenu.key"
                v-for="subMenu in menu.children"
                @click="handleMenuClick(subMenu)"
              >
                {{ subMenu.title }}
              </a-menu-item>
            </a-sub-menu>
            <a-menu-item :key="menu.key" v-else @click="handleMenuClick(menu)">
              <component v-if="menu.icon" :is="menu.icon" />
              <span>{{ menu.title }}</span>
            </a-menu-item>
          </template>
        </a-menu>
      </div>
    </a-layout-sider>
    <a-layout>
      <a-layout-header>
        <div>
          <MenuUnfoldOutlined
            style="font-size: 18px"
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
          <MenuUnfoldOutlined
            style="font-size: 18px"
            v-else
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
        </div>
        <div class="padding-right">
          <a href="#" @click.prevent>
            <a-avatar style="color: #f56a00; background-color: #fde3cf"
              >U
            </a-avatar>
          </a>
        </div>
      </a-layout-header>
      <text-block v-if="breadcrumb" class="breadcrumb" space-between>
        <a-breadcrumb>
          <a-breadcrumb-item>
            <router-link to="/">
              <home-outlined />
              {{ firstMenu.title }}
            </router-link>
          </a-breadcrumb-item>
          <a-breadcrumb-item v-if="findMenu && findMenu.key !== firstMenu.key"
            >{{ findMenu.title }}
          </a-breadcrumb-item>
        </a-breadcrumb>
        <slot name="breadcrumbExtra"></slot>
      </text-block>
      <a-layout-content>
        <slot></slot>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup>
  import '@/assets/less/admin-layout/index.less';
  import { MenuUnfoldOutlined, HomeOutlined } from '@ant-design/icons-vue';
  import { computed, onBeforeMount, reactive, ref } from 'vue';
  import { handleMenuClick } from '@/libs/layout/service/adminLayout.js';
  import { useRoute, useRouter } from 'vue-router';
  import TextBlock from "_libs/other/TextBlock.vue";

  const route = useRoute();
  const router = useRouter();

  const collapsed = ref(false);
  const state = reactive({
    selectedKeys: [],
    openKeys: [],
    allMenus: [],
  });

  const props = defineProps({
    menus: {
      type: Array,
      default: [],
    },
    breadcrumb: {
      type: Boolean,
      default: true,
    },
  });

  const firstMenu = computed(() => props.menus[0]);

  const getAllMenuItems = (menus, parent) => {
    menus.forEach((m) => {
      m.parent = parent;
      state.allMenus.push(m);
      if (m.children) {
        getAllMenuItems(m.children, m);
      }
    });
  };

  getAllMenuItems(props.menus);

  const findMenu = computed(() => {
    return (
      state.allMenus.find((o) => o.alias && o.alias.indexOf(route.name) > -1) ||
      state.allMenus.find((o) => o.key === route.name)
    );
  });
  onBeforeMount(() => {
    if (state.allMenus.length > 0) {
      if (!state.allMenus.find((m) => m.key === route.name)) {
        console.warn('路由未匹配到菜单: ', route.name);
        const firstMenu = state.allMenus.find(
          (o) => !o.children || o.children.length === 0
        );
        router.push(firstMenu.url).then((res) => {
          state.selectedKeys = [route.name];
        });
      }
    }

    if (findMenu && findMenu.value) {
      state.selectedKeys = [findMenu.value.key];
      if (findMenu.value.parent) {
        state.openKeys = [findMenu.value.parent.key];
      }
    }
  });
</script>