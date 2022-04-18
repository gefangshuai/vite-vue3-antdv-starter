<template>
  <a-button @click="handleClose">Close Modal</a-button>
</template>

<script setup>
  import {useSModel} from "_comp/SModal/index.js";

  const handleClose = () => {
    useSModel().closeModal()
  }
</script>

<style scoped>

</style>