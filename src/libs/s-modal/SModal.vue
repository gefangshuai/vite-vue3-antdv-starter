<template>
  <teleport to="body">
    <a-modal
      v-if="visible"
      v-model:visible="visible"
      :footer="null"
      :style="state.view.style"
      @ok="handleOk"
      @cancel="state.view.cancel"
      v-bind="state.view.modal"
    >
      <component
        v-if="state.view.component"
        :is="state.view.component"
        v-bind="state.view.props"
      ></component>
    </a-modal>
  </teleport>
</template>

<script setup>
  import _assign from 'lodash/merge';
  import emitter from '@/core/emitter.js';
  import { ref, reactive, onMounted, onBeforeUnmount, watch } from 'vue';
  import { useRoute } from 'vue-router';

  const comRef = ref(null);
  const visible = ref(false);
  const route = useRoute();
  const state = reactive({
    view: {
      modal: {
        okText: '确定',
        cancelText: '取消',
      },
      component: null,
      props: null,
      ok: () => {},
      cancel: () => {},
    },
  });

  const init = () => {
    state.view = {
      modal: {
        okText: '确定',
        cancelText: '取消',
      },
      component: null,
      props: null,
      ok: () => {},
      cancel: () => {},
    };
  };

  const openModal = (view) => {
    console.log('handleOpenModal');
    init();
    state.view = _assign({}, state.view, view);
    visible.value = view.visible || true;
  };
  const updateModal = (viewOpt) => {
    visible.value =
      viewOpt.visible === undefined || viewOpt.visible === null
        ? true
        : viewOpt.visible;
    state.view = _assign({}, state.view, viewOpt);
  };
  const closeModal = () => {
    visible.value = false;
  };
  const handleOk = () => {
    if (state.view.ok) {
      state.view.ok(comRef);
    }
  };

  onMounted(() => {
    emitter.on('bus_openModal', openModal);
    emitter.on('bus_updateModal', updateModal);
    emitter.on('bus_closeModal', closeModal);

    console.log('s-modal ready!', emitter);
  });
  onBeforeUnmount(() => {
    emitter.off('bus_openModal', openModal);
    emitter.off('bus_updateModal', updateModal);
    emitter.off('bus_closeModal', closeModal);
  });
  watch(
    () => route.name,
    () => {
      closeModal();
    }
  );
</script>

<style scoped></style>
