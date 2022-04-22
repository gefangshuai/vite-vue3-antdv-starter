<template>
  <a-layout
    :class="['admin-layout', breadcrumb ? 'admin-layout-has-breadcrumb' : '']"
  >
    <a-layout-sider
      v-model:collapsed="collapsed"
      :trigger="null"
      collapsible
      :width="siderWidth"
    >
      <div class="logo">运营管理后台</div>
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
        <text-block inline>
          <slot name="head-left"></slot>
        </text-block>
        <text-block inline>
          <slot name="head-right"></slot>
        </text-block>
      </a-layout-header>
      <text-block v-if="breadcrumb" class="breadcrumb" space-between>
        <a-breadcrumb>
          <a-breadcrumb-item v-for="item in breadcrumbItems" :key="item.title">
            <router-link :to="item.url" v-if="item.url">{{item.title}}</router-link>
            <span v-else>{{item.title}}</span>
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
  import './adminLayout.less';
  import { computed, onBeforeMount, reactive, ref } from 'vue';
  import { handleMenuClick } from '@/libs/layout/service/adminLayout.js';
  import { useRoute, useRouter } from 'vue-router';
  import TextBlock from '_libs/other/TextBlock.vue';

  const route = useRoute();
  const router = useRouter();
  const breadcrumbItems = computed(() => route.meta.breadcrumb);

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
    siderWidth: {
      type: [Number, String],
      default: 200,
    },
  });

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
    return state.allMenus.find(
      (o) =>
        (o.alias && o.alias.indexOf(route.name) > -1) ||
        o.key === route.name ||
        (o.routes && o.routes.indexOf(route.name) > -1)
    );
  });


  onBeforeMount(() => {
    if (state.allMenus.length > 0) {
      if (!findMenu) {
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