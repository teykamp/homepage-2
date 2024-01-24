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
              height: 'calc(100vh - 80px - 20px)',
              'border-right': '1px solid #5c5c5c',
              'border-left': '1px solid #5c5c5c',
              'border-bottom': '1px solid #5c5c5c',
              padding: '60px',
            }"
            class="d-flex justify-center"
          >
          <div style="width: 100%;">
            <v-card-text 
              :style="{
                'font-size': '50px',
              }"
            >
              Hi, I'm Thomas
            </v-card-text>
            <v-card-text
              :style="{
                color: 'gray',
                'font-size': '30px',
                'max-width': '70%'
              }"
            >
              I like to solve challenging problems, anywhere... and to build solutions.
            </v-card-text>
            <p :style="{color: accentColor}">_________</p>
            <v-card-text
              :style="{
                'max-width': '90%',
                'font-size': '20px',
              }"
            >
              I'm an environmental engineer working on various chemical remediation design and implementation efforts in the northeastern US. I also develop full-stack web applications for mobile and desktop for clients and myself. I enjoy the challenge of learning on the fly.
            </v-card-text>
            <v-card-text
              :style="{
                'font-size': '20px',
              }"
            >
              Here are some of my technical skills:
            </v-card-text>
            <div class="d-flex justify-space-around mb-2">
              <div style="color: gray">software technologies</div>
              <div style="color: gray">engineering technologies</div>
            </div>
            <div class="d-flex justify-space-around">
              <div style="background-color: #181818; max-height: 150px; color: white; display: flex; flex-wrap: wrap; flex-direction: column;">
                <v-list-item 
                  v-for="technology in softwareTechnologies"
                  :key="technology"
                  prepend-icon="mdi-menu-right"
                  density="compact"
                >
                  {{ technology }}
                </v-list-item>
              </div>
              <div style="background-color: #181818; max-height: 150px; color: white; display: flex; flex-wrap: wrap; flex-direction: column;">
                <v-list-item
                  v-for="technology in engineeringTechnologies"
                  :key="technology"
                  prepend-icon="mdi-menu-right"
                  density="compact"
                >
                  {{ technology }}
                </v-list-item>
              </div>
            </div>
          </div>
          </div>
        </template>
      </CardAnimationWrapper>
  </div>
</template>

<script setup lang="ts">
import CardAnimationWrapper from '../components/CardAnimationWrapper.vue';
import { ref } from 'vue'
import { useAccentColors } from '../store/index'

const { accentColor } = useAccentColors()

const softwareTechnologies = ref([
  'vue',
  'javascript',
  'typescript',
  'node',
  'python',
  'sql',
  'mongodb',
  'data science',
])

const engineeringTechnologies = ref([
  'process design',
  'compliance',
  'vapor intrusion',
  'remediation',
  'stormwater',
  'chemical analysis',
  'CAD',
  'project management',
])
</script>
