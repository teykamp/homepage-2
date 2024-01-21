<template>
  <div
    v-if="lgAndUp"
    style="height: 80px; background: #181818; border-bottom: 1px solid rgb(92, 92, 92);" 
    class="d-flex text-white"
  >
    <div style=" height: 100%; width: 15%;" class="d-flex align-center justify-center">
      <div class="text-bold">
        <p>T<span :style="{
          'color': 'red',
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
        :icon="link.icon"
        variant="tonal"
      ></v-btn>
    </div>
    <div style=" height: 100%; width: 15%;" class="d-flex align-center justify-center">
      <v-btn
        variant="text"
      >contact me</v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useDisplay  } from 'vuetify'

const { lgAndUp } = useDisplay()

const router = useRouter()
const currentRoute = useRoute()
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
.route-text:hover {
  font-style: italic;
  cursor: pointer;
}
</style>