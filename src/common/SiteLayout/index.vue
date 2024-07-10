<template>
  <div class="layout-wapper">
    <Draggable
      v-for="item in layouts"
      :key="item.key"
      :initialPosition="item"
      @drag="handleDrag"
    >
      <div class="box">
        <img :src="item.img" alt="">
      </div>
    </Draggable>
  </div>
</template>
<script setup lang="ts">
import { watch, ref } from 'vue'
import Draggable from './Draggable.vue';
const props = defineProps(['modelValue', 'moduleConfig', 'dataImages'])
const emit = defineEmits(['update:modelValue'])

const layouts = ref([])


const handleDrag = ({ id, position }) => {
  const findItem = layouts.value.find(item => item.key === id);
  if (findItem) {
    findItem.top = position.top
    findItem.left = position.left
  }
};


function channelValue(value) {
  const items = generateArrayFromObject(value);
  calculatePositions(items, 800, 600, 80, 80, 10);
  emit('update:modelValue', items);
  layouts.value = items;
}

function generateArrayFromObject(obj) {
  const result = [];
  for (const key in obj) {
    console.log('key:', key);
    
    const findImg = props.dataImages.find(imageObject => imageObject.id === key);
    if (obj.hasOwnProperty(key)) {
      const count = obj[key];
      for (let i = 1; i <= count; i++) {
        result.push({
          key: `${key.substring(0, 5)}-${i}`,
          img: findImg?.img
        });
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
  .box {
    display: inline-block;
    width: 80px;
    height: 80px;
  }
  .dragging .box {
    background-color: bisque !important;
  }
}
</style>