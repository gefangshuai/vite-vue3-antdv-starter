<template>
  <admin-layout :menus="menus">
    <template v-slot:head-right>
      <a-badge dot>
        <BellFilled style="font-size: 20px" />
      </a-badge>
      <a-divider type="vertical" />
      <a-dropdown>
        <a href="#" @click.prevent class="text-color-normal">
          <text-block>
            <a-avatar style="color: #f56a00; background-color: #fde3cf"
              >U
            </a-avatar>
            <div class="text-sm line-height-1_5 mar-left-sm mar-right-xs">
              欢迎您<br />超级管理员
            </div>
            <CaretDownOutlined />
          </text-block>
        </a>
        <template #overlay>
          <a-menu>
            <a-menu-item>
              <a href="javascript:;">1st menu item</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">2nd menu item</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">3rd menu item</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </template>
    <template v-slot:breadcrumbExtra>
      <a href="#">查看详情</a>
    </template>
    <router-view />
  </admin-layout>
</template>

<script setup>
  import AdminLayout from '_libs/layout/AdminLayout.vue';
  import { menus } from './index.js';
  import TextBlock from '_libs/other/TextBlock.vue';
  import { BellFilled, CaretDownOutlined } from '@ant-design/icons-vue';
</script>

<style scoped></style>
