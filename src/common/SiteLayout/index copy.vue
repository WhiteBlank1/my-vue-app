<template>
  <div class="layout-wapper">
    <span
      v-for="item in layouts"
      :key="item.key"
      :class="`layout-item ${item.key}`"
      :style="{ left: item.left + 'px', top: item.top + 'px' }"
      @mousedown="(e) => startDragging(e, item)"
      @mousemove="(e) => draggingFun(e, item)"
      @mouseup="stopDragging"
      @mouseout="stopDragging"
    >{{ item.key }}</span>
  </div>
</template>
<script setup lang="ts">
import { watch, ref } from 'vue'
const props = defineProps(['modelValue', 'moduleConfig'])
const emit = defineEmits(['update:modelValue'])

const layouts = ref([])
// 是否正在拖拽
const dragging = ref(false)
// 鼠标按下时距离元素左上角的偏移
const offsetX = ref(0)
// 鼠标按下时距禋元素左上角的偏移
const offsetY = ref(0)
const draggingKey = ref('')

function startDragging(e, item) {
  e.preventDefault();
  dragging.value = true;
  draggingKey.value = item.key;

  offsetX.value = e.clientX - item.left;
  offsetY.value  = e.clientY - item.top;
  return false
}

function draggingFun(e, item) {
  if (dragging.value === false || draggingKey.value === '') {
    return;
  }
  if (draggingKey.value !== item.key) {
    return;
  }
  item.left = e.clientX - offsetX.value;
  item.top = e.clientY - offsetY.value;
  emit('update:modelValue', layouts.value);
}

function stopDragging() {
  dragging.value = false;
  draggingKey.value = ''
}

function channelValue(value) {
  const items = generateArrayFromObject(value);
  calculatePositions(items, 800, 600, 100, 30, 10);
  emit('update:modelValue', items);
  layouts.value = items;
}

function generateArrayFromObject(obj) {
  const result = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const count = obj[key];
      for (let i = 1; i <= count; i++) {
        result.push({ key: `${key.substring(0, 5)}-${i}` });
      }
    }
  }
  return result;
}

function calculatePositions(items, containerWidth, containerHeight, itemWidth, itemHeight, margin) {
  let currentTop = 0;
  let currentLeft = 0;
  items.forEach((item, index) => {
    if (currentLeft + itemWidth > containerWidth) {
      currentLeft = 0;
      currentTop += itemHeight + margin;
    }
    item.top = currentTop;
    item.left = currentLeft;
    currentLeft += itemWidth + margin;
  });
}

watch(
  () => props.moduleConfig,
  (value = {}) => {
    const cloneDeepClone = JSON.parse(JSON.stringify(value));
    delete cloneDeepClone.lengthField
    delete cloneDeepClone.widthField
    channelValue(cloneDeepClone)
  },
  {
    deep: true,
    immediate: true
  }
)
</script>
<style lang="less">
.layout-wapper {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: auto;
  .layout-item {
    width: 100px;
    height: 30px;
    line-height: 30px;
    display: inline-block;
    background-color: #ccc;
    position: absolute;
    margin-right: 5px;
    margin-bottom: 5px;
    text-align: center;
    cursor: move;
    border-radius: 4px;
  }
}
</style>