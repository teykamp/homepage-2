<template>
  <v-app class="bg">
    <NavCard />
    <router-view v-slot="{ Component }">
      <transition name="delay" mode="out-in">
        <component :is="Component" />
      </transition>
      <transition name="scale" mode="out-in">
        <div :key="route.path" class="scaling-div"></div>
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
  background-image: radial-gradient(rgb(32, 32, 32) 10%, transparent 10.01%);
  background-size: 20px 20px;
  height: 100vh; 
  width: 100%;
}

.scaling-div {
  height: 100vh;
  width: 100vh;
  border-radius: 100%;
  background: black;
  position: absolute;
  top: 50vh;
  left: 50vh;
  z-index: 100;
  pointer-events: none;
  transform: scale(0);
}

.delay-ender-active,
.delay-leave-active {
  transition-delay: 500ms;
  opacity: 0;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 1;
}

.scale-enter-active,
.scale-leave-active {
  transform: scale(0);
  transition: transform 500ms ease-in-out;
}

.scale-enter-from,
.scale-leave-to {
  transform: scale(3);
}
  
</style>
