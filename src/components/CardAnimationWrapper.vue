<template>
  <div ref="wrapper" :style="{width: props.format.width}">
    <div
      @mouseenter="showHover = true"
      @mouseleave="showHover = false"
      @mousemove="handleMouseMove"
      class="card text-white rounded-sm"
      :style="{
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
        border: props.format.border ? '1px solid rgb(92, 92, 92)' : '',
      }"
    >
    <div
      v-if="props.format.borderAnimation"
      class="gradient" 
      :style="{
        position: 'absolute',
        top: (mouseY - 85) + 'px',
        left: '0',
        height: '200px',
        width: '2px',
        'z-index': '999',
      }"
      ></div>
    <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, computed, onMounted } from 'vue'

const props = defineProps<{
  format: {
    borderAnimation: boolean,
    border: boolean,
    hoverEffect: boolean,
    width: string,
  }
}>()

const wrapper = ref(null)
const elementOffset = ref(0)
const mouseY = ref(0)

onMounted(() => {
  elementOffset.value = wrapper.value?.getBoundingClientRect().top
})

const showHover = ref(false)

const handleMouseMove = (event: any) => {
  if (!showHover.value) return
    mouseY.value = event.clientY - elementOffset.value
}

const computedOpacity = computed(() => showHover.value ? 1 : 0)
const computedHoverEffect = computed(() => props.format.hoverEffect ? 'scale(1.02)' : '')

</script>

<style scoped>
.card {
  background: #181818;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out; 
  width: fit-content;
}
.card:hover {
  transform: v-bind(computedHoverEffect);
}
.gradient {
  background: linear-gradient(rgba(255, 255, 255, 0), rgb(144, 104, 167), rgba(255, 255, 255, 0));
  opacity: v-bind(computedOpacity);
  transition: opacity;
  transition-duration: 550ms;
}
</style>