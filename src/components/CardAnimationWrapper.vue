<template>
  <div>
    <v-sheet
      @mouseenter="setShowHover"
      @mouseleave="showHover = false, showHoverTransitionDuration = false"
      @mousemove="handleMouseMove"
      class="card text-white"
      style="overflow: hidden; position: relative;"
    >
    <div
        class="gradient" 
        :style="{
          position: 'absolute',
          top: (mouseY - 75) + 'px',
          left: '0',
          height: '200px',
          width: '3px',
        }"
      ></div>
    <slot name="card-content"></slot>
    </v-sheet>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const mouseX = ref(0)
const mouseY = ref(0)
const setShowHover = () => {
  showHover.value = true
  setTimeout(() => {
    showHoverTransitionDuration.value = true
  }, 500)
}

const showHover = ref(false)
const showHoverTransitionDuration = ref(false)

const handleMouseMove = (event: any) => {
  if (!showHover.value) return
  mouseX.value = event.clientX
  mouseY.value = event.clientY
}

const computedOpacity = computed(() => showHover.value ? 1 : 0)
const computedTransitionDuration = computed(() => showHoverTransitionDuration.value ? '100ms' : '250ms')

</script>

<style scoped>
.card {
  background: #181818;
  height: 40vh;
  border: 2px solid rgb(92, 92, 92);
  width: 20%;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out; 
}
.card:hover {
  transform: scale(100.5%);
}
.gradient {
  background: linear-gradient(rgba(255, 255, 255, 0), rgb(144, 104, 167), rgba(255, 255, 255, 0));
  transition-duration: v-bind(computedTransitionDuration);
  opacity: v-bind(computedOpacity);
}
</style>