import emitter from '@/core/emitter';

export const useSModel = () => {
  return {
    openModal: (view) => {
      console.log('view', view)
      emitter.emit('bus_openModal', view);
    },

    updateModal: (view) => {
      emitter.emit('bus_updateModal', view);
    },
    closeModal: () => {
      emitter.emit('bus_closeModal');
    },
  };
};
