import emitter from '@/core/emitter';

export const openModal = view => {
  emitter.emit('bus_openModal', view);
}

export const updateModal = view => {
  emitter.emit('bus_updateModal', view);
}

export const closeModal = view => {
  emitter.emit('bus_closeModal', view);
}
