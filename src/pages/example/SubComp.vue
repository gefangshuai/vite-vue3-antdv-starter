<template>
  <div>SubComp: 这是子组件, <a href="#" @click.prevent="handleAClick">点我</a></div>
</template>

<script setup>
  import {message} from "ant-design-vue";

  const handleClick = (value) => {
    message.success(`触发了子组件方法调用: ${value}`)
  }

  defineExpose({
    handleClick
  })

  const emitter = defineEmits(['success'])

  const handleAClick = () => {
    emitter('success', 'hello')
  }

</script>

<style scoped>

</style>