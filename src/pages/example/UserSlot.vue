<template>
  <a-card hoverable>
    <div v-if="user">
      <p>用户名: {{ user.name }}</p>
      <p>邮箱：{{ user.email }}</p>
      <p>
        日期： {{ $filter.getDateTimeFormat(user.createdDate, 'YYYY-MM-DD') }}
      </p>
    </div>
    <div>
      简介：
      <slot name="desc"></slot>
    </div>
    <div>
      其他：
      <slot></slot>
    </div>
  </a-card>
</template>

<script setup>
  import { useSlots } from 'vue';

  const slots = useSlots();

  defineProps({
    user: {
      type: Object,
      default: null,
    },
  });

  console.log(slots);
</script>

<style scoped></style>
