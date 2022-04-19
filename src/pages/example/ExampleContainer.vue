<template>
  <base-container title="BaseContainer">
    <template v-slot:title>
      <a-breadcrumb>
        <a-breadcrumb-item><LayoutOutlined /> Home</a-breadcrumb-item>
        <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
        <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
        <a-breadcrumb-item>An Application</a-breadcrumb-item>
      </a-breadcrumb>
    </template>
    <template v-slot:extra>
      <a-button type="primary">Add User</a-button>
    </template>
  </base-container>
</template>

<script setup>
  import BaseContainer from '_comp/container/base/BaseContainer.vue';
  import { LayoutOutlined } from '@ant-design/icons-vue';
</script>

<style scoped></style>
