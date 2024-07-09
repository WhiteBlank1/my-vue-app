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

function startDragging(e, item) {
  dragging.value = true;
  console.log('aa', document.getElementsByClassName(`${item.key}`)[0].style);
  
  console.log('e, item:', e, item);
  offsetX.value = e.clientX - item.left;
  offsetY.value  = e.clientY - item.top;
  // document.getElementsByClassName(`${item.key}`)[0]?.style?.position = 'absolute';
}

function draggingFun(e, item) {
  if (dragging.value === false) {
    return;
  }
  item.left = e.clientX - offsetX.value;
  item.top = e.clientY - offsetY.value;
  emit('update:modelValue', layouts.value);
  // document.getElementsByClassName(`${item.key}`)[0]?.style?.position = 'relative';
}

function stopDragging() {
  dragging.value = false;
}

function morePreValue(cloneDeepValue, currentValue, subKey) {
  for (let j = 0; j < currentValue; j++) {
    cloneDeepValue.push({
      key: `${subKey}-${j + 1}`,
      top: 20,
      left: 110 * j
    });
  }
  emit('update:modelValue', cloneDeepValue);
  layouts.value = cloneDeepValue;
}

function channelValue(value) {
  console.log('value:', value);
  for (const key in value) {
    if (!Object.prototype.hasOwnProperty.call(value, key)) {
      continue;
    }
    let currentValue = value[key] || 0;
    currentValue = Number(currentValue);
    const subKey = key.substring(0, 3);
    const cloneDeepValue = JSON.parse(JSON.stringify(layouts.value));
    
    morePreValue(cloneDeepValue, currentValue, subKey)
  }
}

watch(
  () => props.moduleConfig,
  (value = {}) => {
    channelValue(value)
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
    position: absolute;
    background-color: #ccc;
    text-align: center;
    cursor: move;
    border-radius: 4px;
  }
}
</style>