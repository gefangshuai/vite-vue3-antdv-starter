<template>
  <admin-layout :menus="menus">
    <router-view />
  </admin-layout>
</template>

<script setup>
  import AdminLayout from '_comp/layout/AdminLayout.vue';
  import { menus } from './index.js';
</script>

<style scoped></style>
