<template>
  <div>
    
    <div class="d-flex">
      <CardAnimationWrapper 
        :format="{
          borderAnimation: true,
          border: true,
          hoverEffect: true
        }"
        class="mt-10 ml-10"
      >
        <template #card-content>
          <v-sheet style="height: 200px; width: 600px; background: #181818;">
            
      1
          </v-sheet>
        </template>
      </CardAnimationWrapper>
      <CardAnimationWrapper 
        :format="{
          borderAnimation: true,
          border: true,
          hoverEffect: true
        }"
        class="mt-10 ml-10"
      >
        <template #card-content>
          <v-sheet style="height: 200px; width: 600px; background: #181818;">
            1
      
          </v-sheet>
        </template>
      </CardAnimationWrapper>
    </div>
    <CardAnimationWrapper 
      :format="{
        borderAnimation: true,
        border: true,
        hoverEffect: true
      }"
      class="mt-10 ml-10"
    >
      <template #card-content>
        <v-sheet style="height: 200px; width: 600px; background: #181818;">
          
2
        </v-sheet>
      </template>
    </CardAnimationWrapper>
    
  </div>
</template>

<script setup lang="ts">
import CardAnimationWrapper from '../components/CardAnimationWrapper.vue';
</script>
