<template>
  <div>

    <CardAnimationWrapper
      :format="{
        borderAnimation: true,
        border: true,
        hoverEffect: false
      }"
    >
      <template #card-content>
        <NavCardVue />
      </template>
    </CardAnimationWrapper>

  </div>
</template>

<script setup lang="ts">
import CardAnimationWrapper from '../components/CardAnimationWrapper.vue';
import NavCardVue from '../components/NavCard.vue';
</script>
