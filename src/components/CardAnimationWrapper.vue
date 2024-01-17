<template>
  <div ref="wrapper">
    <v-sheet
      @mouseenter="showHover = true"
      @mouseleave="showHover = false"
      @mousemove="handleMouseMove"
      class="card text-white"
      :style="{
        overflow: 'hidden',
        position: 'relative',
        border: props.format.border ? '2px solid rgb(92, 92, 92)' : '',
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
      }"
      ></div>
    <slot name="card-content"></slot>
    {{ mouseY }}
    </v-sheet>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, computed, onMounted } from 'vue'

const props = defineProps<{
  format: {
    borderAnimation: boolean,
    border: boolean,
    hoverEffect: boolean,
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
const computedTransitionDuration = computed(() => showHover.value ? '0' : '250ms')
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
  transition-duration: v-bind(computedTransitionDuration);
  opacity: v-bind(computedOpacity);
}
</style>