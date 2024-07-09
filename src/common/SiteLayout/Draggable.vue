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
      const e = event.type === 'touchstart' ? event.touches[0] : event;
      startPosition.value = {
        x: e.clientX - position.value.left,
        y: e.clientY - position.value.top,
      };
      document.addEventListener('mousemove', onDrag);
      document.addEventListener('touchmove', onDrag);
      document.addEventListener('mouseup', stopDrag);
      document.addEventListener('touchend', stopDrag);
    };

    const onDrag = (event) => {
      if (!isDragging.value) return;
      const e = event.type === 'touchmove' ? event.touches[0] : event;
      position.value = {
        top: e.clientY - startPosition.value.y,
        left: e.clientX - startPosition.value.x,
      };
      emit('drag', { id: props.id, position: position.value });
    };

    const stopDrag = () => {
      isDragging.value = false;
      document.removeEventListener('mousemove', onDrag);
      document.removeEventListener('touchmove', onDrag);
      document.removeEventListener('mouseup', stopDrag);
      document.removeEventListener('touchend', stopDrag);
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