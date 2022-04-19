<template>
  <a-menu-item :key="menu.key">
    <component v-if="menu.icon" :is="menu.icon" />
    <span>{{ menu.title }}</span>
  </a-menu-item>
</template>

<script setup>
  defineProps({
    menu: Object,
  });
</script>

<style scoped></style>
