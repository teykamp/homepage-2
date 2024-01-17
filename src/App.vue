<template>
  <v-app class="bg">
    <RouterView />
  </v-app>
</template>

<script setup lang="ts">

</script>

<style scoped>
.bg {
  background: #181818;
  background-image: radial-gradient(rgb(65, 64, 64) 10%, transparent 10.01%);
  background-size: 20px 20px;
  height: 100vh; 
  width: 100%;
}
</style>
