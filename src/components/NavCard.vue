<template>
  <div 
    ref="container"
    :style="{
      background: '#181818',
      width: '300px',
    }"
  >
    <div
      v-for="(route, index) in routes"
      :key="index"
      @click="router.push({name: route.name})"
      @mouseenter="hoverIndex = index"
      @mouseleave="hoverIndex = -1"
      class="text-uppercase route-link"
      :style="{
        'font-style': getFontStyle(route, index),
        'color': route.name === currentRoute.name ? 'white' : '#363636',
        'font-weight': hoverIndex === index ? '' : 'light',
        display: 'block',
        'text-align': 'right',
        'font-size': '50px',
        'font-family': 'Inter',
        position: 'relative',
        'margin-right': '10px',
      }"
    >
    {{ route.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const routes = ref(router.options.routes)
const currentRoute = ref(router.currentRoute)
const hoverIndex = ref(-1)

const getFontStyle = (route: any, index: number) => {
  if (currentRoute.value.name === route.name) return 'italic'
  if (hoverIndex.value === index) return 'italic'

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
.route-link:hover {
  cursor: pointer;
}
</style>