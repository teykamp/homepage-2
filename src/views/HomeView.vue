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
       :style="{
         width: '35%',
         height: 'calc(100vh - 80px - 100px)',
       }"
     ></div>
   </div>
   <div
     :style="{
       width: '100%',
       height: '100px',
       'border-top': '1px solid #5c5c5c',
     }"
   ></div>
 </div>
</template>

<script setup lang="ts">
import CardAnimationWrapper from '../components/CardAnimationWrapper.vue';
</script>
