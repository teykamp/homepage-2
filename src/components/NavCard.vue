<template>
  <div 
    ref="container"
    :style="{
      background: '#181818',
      width: '400px',
    }"
  >
    <div
      v-for="(route, index) in routes"
      :key="index"
      @mouseenter="hoverIndex = index"
      @mouseleave="hoverIndex = -1"
      class="text-uppercase route-link"
      :style="{
        // 'font-style': route.name === currentRoute.name ? '' : 'italic',
        'color': route.name === currentRoute.name ? 'white' : '#363636',
        // 'font-weight': hoverIndex === index ? '' : 'light',
        display: 'block',
        'text-align': 'right',
        'transition-duration': '300ms',
        'transition-timing-function': 'ease-out',
        'font-size': '50px',
        'font-family': 'Inter',
      }"
    >
    <!-- <div
      class="background-box"
      :style="{
        position: 'absolute',
        background: 'white',
        height: '100px',
      }"
    ></div> -->
    {{ route.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const routes = ref(router.options.routes)
const currentRoute = ref(router.currentRoute)
const hoverIndex = ref(-1)

const container = ref(null)

const containerWidth = ref(null)
onMounted(() => {
  containerWidth.value = container.value.clientWidth
})

const hoverSpacing = computed(() => {
  // works for work/home perfectly, not so good for rest
  // can also have orange arrow
  if (hoverIndex.value === -1) return ''
  const lengthOfRouterLink = routes.value[hoverIndex.value].name.length
  const letterSpacing = (containerWidth.value - lengthOfRouterLink * 37.5) / (lengthOfRouterLink - 1)
  return `${letterSpacing}px`
})

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
.route-link:hover {
  letter-spacing: v-bind(hoverSpacing);
  margin-right: calc(v-bind(hoverSpacing) * -1);
  cursor: pointer;
}
/* 
.background-box:parent.hover {
  width: 100%;
} */
</style>