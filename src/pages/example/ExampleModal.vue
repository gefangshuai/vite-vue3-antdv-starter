<template>
  <a-button @click="openModal">Open Modal</a-button>
</template>

<script setup>
  import {defineAsyncComponent, shallowRef} from 'vue';
  import { useSModel } from '@/libs/s-modal';

  const openModal = () => {
    useSModel().openModal({
      modal: {
        title: 'Modal Title',
      },
      component: shallowRef(
        defineAsyncComponent(() => import('./ModalTest.vue'))
      ),
    });
  };
</script>

<style scoped></style>
