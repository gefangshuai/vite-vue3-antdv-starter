<template>
  <slot v-if="show"></slot>
</template>

<script setup>
  import {onMounted, ref, watch} from "vue";
  const show = ref(true)
  const props = defineProps({
    delay: {
      type: Number,
      default: 100
    },
    visible: {
      type: Boolean,
      default: true
    }
  })
  watch(() => props.visible, value => {
    if(!value) {
      setTimeout(() => {
        show.value = false
      }, props.delay)
    }
  })
  onMounted(() => {

  })
</script>

<style scoped>

</style>