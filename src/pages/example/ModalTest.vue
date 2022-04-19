<template>
  <a-button @click="handleClose">Close Modal</a-button>
</template>

<script setup>
  import {useSModel} from "_libs/s-modal";

  const handleClose = () => {
    useSModel().closeModal()
  }
</script>

<style scoped>

</style>