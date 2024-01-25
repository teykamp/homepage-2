<template>
  <div
    v-if="lgAndUp"
    style="height: 80px; background: #181818; border-bottom: 1px solid rgb(92, 92, 92);" 
    class="d-flex text-white"
  >
    <div style=" height: 100%; width: 15%;" class="d-flex align-center justify-center">
      <div class="text-bold" style="{ font-family: 'Playfair Display', serif;
  font-family: 'Young Serif', serif; }">
        <p>T<span :style="{
          'color': accentColor,
          'font-size': '20px'
        }">.</span> Eykamp</p>
      </div>
    </div>
    <div style=" height: 100%; width: 50%; border-right: 1px solid #5c5c5c;" class="d-flex align-center justify-center text-uppercase">
      <div
        v-for="(route, index) in routes"
        :key="index"
        @click="router.push({ name: route.name })"
        :style="{
          color: route.name === currentRoute.name ? '' : '#5c5c5c',
        }"
        class="mx-10 px-10 route-text"
      > {{ route.name }}</div>
    </div>
    <div style=" height: 100%; width: 20%; border-right: 1px solid rgb(92, 92, 92);" class="d-flex align-center justify-space-around">
      <v-btn
        v-for="(link, key) in socialLinks"
        :key="key"
        :href="link.link"
        target="_blank"
        :icon="link.icon"
        variant="tonal"
      ></v-btn>
    </div>
    <div style=" height: 100%; width: 15%; overflow: hidden; position: relative;" class="d-flex align-center justify-center">
      <div
        @mouseenter="contactMeHover = true"
        @mouseleave="contactMeHover = false"
        :style="{
          cursor: 'pointer',
        }"  
      >CONTACT ME</div>
      <div
        class="donut" 
        :style="{
          scale: contactMeHover ? `2.6` : ''
        }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useDisplay  } from 'vuetify'
import {  useAccentColors } from '../store/index'

const { accentColor } = useAccentColors()

const { lgAndUp } = useDisplay()

const router = useRouter()
const currentRoute = useRoute()
const routes = ref(router.options.routes)

const contactMeHover = ref(false)

const socialLinks = ref({
  linkedin: {
    icon: 'mdi-linkedin',
    link: 'https://linkedin.com/in/thomas-eykamp/',
  },
  github: {
    icon: 'mdi-github',
    link: 'https://github.com/teykamp',
  },
  email: {
    icon: 'mdi-email',
    link: 'mailto:thomas@eykamp.com',
  }
})

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Martel&family=Playfair+Display&family=Roboto+Slab:wght@300&family=Young+Serif&display=swap');
.route-text:hover {
  font-style: italic;
  cursor: pointer;
}

.donut {
  position: absolute;
  width: 110%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(circle at center, transparent 15%, #202020 15%, #202020 85%, transparent 85%);
  scale: 5;
  transition: 300ms ease-in-out;
  pointer-events: none;
}
</style>