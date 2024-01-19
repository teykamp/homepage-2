<template>
  <v-app class="bg">
    <NavCard />
    <RouterView />
  </v-app>
</template>

<script setup lang="ts">
import NavCard from './components/NavCard.vue';
</script>

<style scoped>
.bg {
  background: #181818;
  background-image: radial-gradient(rgb(32, 32, 32) 10%, transparent 10.01%);
  background-size: 20px 20px;
  height: 100vh; 
  width: 100%;
}
</style>
