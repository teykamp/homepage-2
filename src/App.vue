<template>
  <v-app class="bg">
    <NavCard />
    <router-view v-slot="{ Component }">
      <transition name="scale" mode="out-in">
        <div :key="route.path" class="scaling-div"></div>
      </transition>
      <transition name="delay" mode="out-in">
        <component :is="Component" />
      </transition>
      </router-view>
  </v-app>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import NavCard from './components/NavCard.vue';

const route = useRoute()
</script>

<style scoped>
.bg {
  background: #181818;
  background-image: radial-gradient(#202020 10%, transparent 10%);
  background-size: 20px 20px;
  height: 100vh; 
  width: 100%;
  overflow: hidden;
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
  transition: opacity 160ms;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 1;
  transition: opacity 160ms;

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
