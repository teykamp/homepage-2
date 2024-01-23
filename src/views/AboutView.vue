<template>
  <div class="d-flex justify-center">
      <CardAnimationWrapper 
        :format="{
          borderAnimation: true,
          border: false,
          hoverEffect: false,
          width: '70%'
        }"
      >
        <template #content>
          <div
            :style="{
              height: 'calc(100vh - 80px - 80px)',
              'border-right': '1px solid #5c5c5c',
              'border-left': '1px solid #5c5c5c',
              'border-bottom': '1px solid #5c5c5c',
            }"
           ></div>
        </template>
      </CardAnimationWrapper>
  </div>
</template>

<script setup lang="ts">
import CardAnimationWrapper from '../components/CardAnimationWrapper.vue';
</script>
