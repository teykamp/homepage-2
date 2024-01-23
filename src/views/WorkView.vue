<template>
  <div class="d-flex justify-center">
    <div 
      :style="{
        width: '90%',
        display: 'grid',
        'grid-template-columns': 'repeat(2, 1fr)',
      }"
    >
      <div
        v-for="index in 6"
        :key="index"
        :style="{
        height: mdAndUp ? 'calc((100vh - 80px) / 3)' : '300px',
        color: 'white',
        background: 'red',
        }"
      >
    {{ index }}</div>
    
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';

const { mdAndUp } = useDisplay()
// import { ref } from 'vue'
// const test = ref({

// })

</script>
