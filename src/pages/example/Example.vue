<template>
  <admin-layout :menus="menus">
    <template v-slot:breadcrumbExtra>
      <a href="#">查看详情</a>
    </template>
    <router-view />
  </admin-layout>
</template>

<script setup>
  import AdminLayout from '_libs/layout/AdminLayout.vue';
  import { menus } from './index.js';
</script>

<style scoped></style>
