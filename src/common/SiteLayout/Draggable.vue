<template>
  <div
    :class="`draggable ${isDragging ? 'dragging' : ''}`"
    :style="{ top: `${position.top}px`, left: `${position.left}px` }"
    @mousedown="startDrag"
    @touchstart="startDrag"
  >
    <slot></slot>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';

export default {
  name: 'Draggable',
  props: {
    initialPosition: {
      type: Object,
      default: () => ({ top: 0, left: 0 })
    },
    id: {
      type: Number,
      required: true
    }
  },
  emits: ['drag'],
  setup(props, { emit }) {
    const isDragging = ref(false);
    const position = ref({ ...props.initialPosition });
    const startPosition = ref({ x: 0, y: 0 });

    const startDrag = (event) => {
      isDragging.value = true;
      event.preventDefault();
      const e = event.type === 'touchstart' ? event.touches[0] : event;
      startPosition.value = {
        x: e.clientX - position.value.left,
        y: e.clientY - position.value.top,
      };
      document.addEventListener('mousemove', onDrag, false);
      document.addEventListener('touchmove', onDrag, false);
      document.addEventListener('mouseup', stopDrag, false);
      document.addEventListener('touchend', stopDrag, false);
    };

    const onDrag = (event) => {
      if (!isDragging.value) return;
      event.preventDefault();
      const e = event.type === 'touchmove' ? event.touches[0] : event;
      position.value = {
        top: e.clientY - startPosition.value.y,
        left: e.clientX - startPosition.value.x,
      };
      emit('drag', { id: props.id, position: position.value });
    };

    const stopDrag = () => {
      isDragging.value = false;
      document.removeEventListener('mousemove', onDrag, false);
      document.removeEventListener('touchmove', onDrag, false);
      document.removeEventListener('mouseup', stopDrag, false);
      document.removeEventListener('touchend', stopDrag, false);
    };

    onMounted(() => {
      position.value = { ...props.initialPosition };
    });

    return {
      position,
      isDragging,
      startDrag,
    };
  },
};
</script>

<style scoped>
.draggable {
  position: absolute;
  cursor: move;
  user-select: none;
}
</style>
<style scoped lang="less">
.dragging {
  z-index: 1;
}
</style>