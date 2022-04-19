<template>
  <router-view />
  <s-modal></s-modal>
</template>
<script>
  import SModal from "_libs/s-modal/SModal.vue";
  export default {
    components: {SModal}
  }
</script>