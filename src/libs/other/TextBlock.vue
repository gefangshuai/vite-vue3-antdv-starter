<template>
  <div :class="['text-block', spaceBetween ? 'text-block-spacebetween' : '']">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'TextBlock',
    props: {
      spaceBetween: Boolean,
    },
  };
</script>

<style scoped lang="less">
  .text-block {
    display: flex;
    flex-direction: row;
    align-items: center;
    &.text-block-spacebetween {
      justify-content: space-between;
    }
  }
</style>
