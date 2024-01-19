<template>
  <div 
    style="height: 50px; background: #181818; border-bottom: 1px solid rgb(92, 92, 92);" 
    class="d-flex"
  >
    <div style=" height: 100%; width: 10%;" class="d-flex align-center">
      <div>logo here</div>
    </div>
    <div style=" height: 100%; width: 60%; border-right: 1px solid rgb(92, 92, 92);" class="d-flex align-center justify-center">
      <div
        v-for="(route, index) in routes"
        :key="index"
      >{{ route.name }}</div>
    </div>
    <div style=" height: 100%; width: 20%; border-right: 1px solid rgb(92, 92, 92);" class="d-flex align-center justify-space-around">
      <v-btn
        v-for="(link, key) in socialLinks"
        :key="key"
        :icon="link.icon"
        variant="tonal"
        size="sm"
      ></v-btn>
    </div>
    <div style=" height: 100%; width: 10%;" class="d-flex align-center">
      <v-btn
        variant="tonal"
      >contact me</v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardAnimationWrapper from './CardAnimationWrapper.vue';
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const routes = ref(router.options.routes)

const socialLinks = ref({
  linkedin: {
    icon: 'mdi-linkedin',
    link: '',
  },
  github: {
    icon: 'mdi-github',
    link: '',
  },
  email: {
    icon: 'mdi-email',
    link: '',
  }
})

</script>

<style scoped>
</style>