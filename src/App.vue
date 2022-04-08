<template>
  <router-view />
  <s-modal></s-modal>
</template>
<script>
  import SModal from "_comp/SModal/SModal.vue";
  export default {
    components: {SModal}
  }
</script>