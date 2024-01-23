<template>
  <div class="d-flex justify-center">
    <div 
      :style="{
        width: '85%',
        display: 'grid',
        'grid-template-columns': 'repeat(2, 1fr)',
        gap: '5px',
        'margin-top': '5px',
      }"
    >
      <CardAnimationWrapper 
        v-for="index in 8"
        :key="index"
        :format="{
          borderAnimation: false,
          border: true,
          hoverEffect: false,
          width: '100%',
        }"
      >
        <template #content>
          <div :style="{
            height: mdAndUp ? 'calc((100vh - 80px - 30px) / 4)' : '300px',
            width: '100%',
          }">
            <!-- <v-img
              cover
              src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2Ff%2Fb%2F7%2F358289.jpg&f=1&nofb=1&ipt=a062aef7ff64f1c76e5b33e6d45ef3a679a9bf3a2fab4a671143f12742282069&ipo=images"
            ></v-img> -->
          </div>
        </template>
      </CardAnimationWrapper>
    
    </div>
  </div>
</template>

<script setup lang="ts">
import CardAnimationWrapper from '../components/CardAnimationWrapper.vue';
import { useDisplay } from 'vuetify';

const { mdAndUp } = useDisplay()
// import { ref } from 'vue'
// const test = ref({

// })

</script>
