<template>
 <div>
   <div class="d-flex">
     <div 
      :style="{
        width: '65%',
        height: 'calc(100vh - 80px - 100px)',
        'border-right': '1px solid #5c5c5c',
       }"
    ></div>
    <div
       class="d-flex align-end"
       :style="{
         width: '35%',
         height: 'calc(100vh - 80px - 100px)',
         padding: '30px',
       }"
     >

      <div>
        <div style="color: white;" class="d-flex justify-center">
          <v-icon size="x-large" icon="mdi-code-braces"></v-icon>
          <p style="font-size: 20px;" class="mx-4">+</p>
          <v-icon size="x-large" icon="mdi-cog-outline"></v-icon>
        </div>
        <div>
          <div
            :style="{
              color: 'white',
              'font-size': '50px',
              'margin-top': '15vh'
            }"
          >I'm an engineering consultant and full-stack developer.</div>
          <div :style="{
            color: 'gray',
            'font-size': '30px',
            'font-style': 'italic'
          }">I solve challenging and engaging problems in any industry.</div>
      </div>
      </div>
    </div>
  </div>
   <div
     :style="{
       width: '100%',
       height: '100px',
       'border-top': '1px solid #5c5c5c',
     }"
     class="text-white d-flex justify-end"
   >
   <p>This is a project description</p>

   <div 
     class="d-flex align-center justify-center"
    :style="{
    height: '100%',
    width: '17.5%',
    'border-left': '1px solid #5c5c5c',
    position: 'relative',
    overflow: 'hidden',
   }">
    <v-icon
      @mouseenter="arrowHoverEffectId = 1"
      @mouseleave="arrowHoverEffectId = 0"
      size="x-large" 
      icon="mdi-arrow-left" 
      style="cursor: pointer"
    ></v-icon>
    <div 
      :style="{
        scale: arrowHoverEffectId === 1 ? '1' : ''
      }"
      class="donut"
    ></div>
   </div>
   <div 
    class="d-flex align-center justify-center"
    :style="{
    height: '100%',
    width: 'calc(17.5% + 1px)' /* borders need to match up */,
    'border-left': '1px solid #5c5c5c',
    position: 'relative',
    overflow: 'hidden',
   }">
    <v-icon 
      @mouseenter="arrowHoverEffectId = 2"
      @mouseleave="arrowHoverEffectId = 0"
      size="x-large" 
      icon="mdi-arrow-right" 
      style="cursor: pointer"
    ></v-icon>
    <div 
      class="donut" 
      :style="{
        scale: arrowHoverEffectId === 2 ? '1' : ''
      }"
    ></div>
   </div>
  </div>
 </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const arrowHoverEffectId = ref<0 | 1 | 2>(0)

</script>

<style scoped>
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
