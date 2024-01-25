<template>
  <v-app class="bg" :style="{ overflow: mdAndDown ? '' : 'hidden', 'overflow-x': 'hidden', }">
    <NavCard />
    <router-view v-slot="{ Component }">
      <transition name="scale" mode="out-in">
        <div :key="route.path" class="scaling-div" :style="{'margin-top': mdAndDown ? '200px' : ''}"></div>
      </transition>
      <transition name="delay" mode="out-in">
        <component :is="Component" />
      </transition>
      </router-view>
      <div style="position: absolute; bottom: 40px; right: 0; z-index: 100; color: white; transform: rotate(90deg)">&copy; 2024</div>
  </v-app>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import NavCard from './components/NavCard.vue';
import { useDisplay } from 'vuetify';

const { mdAndDown } = useDisplay()

const route = useRoute()
</script>

<style scoped>
.bg {
  background: #181818;
  background-image: radial-gradient(#202020 10%, transparent 10%);
  background-size: 20px 20px;
  min-height: 100vh; 
  width: 100%;
}

.scaling-div {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(circle at center, transparent 15%, #202020 15%, #202020 85%, transparent 85%);
  position: absolute;
  z-index: 1000;
  pointer-events: none;
  transform: scale(0);
}

.delay-enter-active,
.delay-leave-active {
  opacity: 0;
  transition: opacity 120ms;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 1;

}

.scale-leave-active {
  transform: scale(0);
  transition: transform 1000ms ease-in-out;
}

.scale-enter-from,
.scale-leave-to,
.scale-enter-active {
  transform: scale(10);
}
 
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
