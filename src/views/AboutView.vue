<template>
  <div>
    <div 
      v-if="lgAndUp"
      class="d-flex justify-center"
    >
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
              'padding-top': '2vh',
            }"
            class="d-flex justify-center"
          >
            <div style="width: 100%;">
              <v-card-text 
                :style="{
                  // 'font-size': '3.125rem',
                  'font-size': '6vh',
                }"
              >
                {{ title }}
              </v-card-text>
              <v-card-text
                :style="{
                  color: 'gray',
                  // 'font-size': '1.875rem',
                  'font-size': '3vh',
                  'max-width': '70%'
                }"
              >
                {{ subtitle }}
              </v-card-text>
              <p :style="{color: accentColor}">_________</p>
              <v-card-text
                :style="{
                  'max-width': '90%',
                  // 'font-size': '1.25rem',
                  'font-size': '2vh',
                }"
              >
                {{ body }}
              </v-card-text>
              <v-card-text
                :style="{
                  // 'font-size': '1.25rem',
                  'font-size': '2vh',
                }"
              >
                Here are some of my technical skills:
              </v-card-text>
              <div class="d-flex justify-space-around mb-2">
                <div style="color: gray">software skills</div>
                <div style="color: gray">engineering skills</div>
              </div>
              <div class="d-flex justify-space-around">
                <div :style="{
                  'background-color': 'rgba(0, 0, 0, 0)',
                  'max-height': '150px',
                  color: 'white',
                  display: 'flex',
                  'flex-wrap': 'wrap',
                  'flex-direction': 'column',
                }">
                  <v-list-item 
                    v-for="technology in softwareTechnologies"
                    :key="technology"
                    prepend-icon="mdi-menu-right"
                    density="compact"
                    style="font-size: 2vh;"
                  >
                    {{ technology }}
                  </v-list-item>
                </div>
                <div :style="{
                  'background-color': 'rgba(0, 0, 0, 0)',
                  'max-height': '150px',
                  color: 'white',
                  display: 'flex',
                  'flex-wrap': 'wrap',
                  'flex-direction': 'column',
                }">
                  <v-list-item
                    v-for="technology in engineeringTechnologies"
                    :key="technology"
                    prepend-icon="mdi-menu-right"
                    density="compact"
                    style="font-size: 2vh;"
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

    <!-- --- --- --- -->

    <div v-else class="mt-14 pa-6" style="position: relative;">
      <v-card-text 
        :style="{
          'font-size': '2.5rem',
          color: 'white',
        }"
      >
        {{ title }}
      </v-card-text>
      <v-card-text
        :style="{
          color: 'gray',
          'font-size': '1.25rem',
        }"
      >
        {{ subtitle }}
      </v-card-text>
      <p :style="{ color: accentColor, 'margin-left': '15px', }">_________</p>
      <v-card-text
        :style="{
          'font-size': '0.9375rem',
          color: 'white',
        }"
      >
        {{ body }}
      </v-card-text>
      
      <v-card-text style="color: gray;">software skills</v-card-text>
      <v-list-item 
        v-for="technology in softwareTechnologies"
        :key="technology"
        prepend-icon="mdi-menu-right"
        density="compact"
        class="text-white"
      >
        {{ technology }}
      </v-list-item>
      <v-card-text style="color: gray;">engineering skills</v-card-text>
      <v-list-item
        v-for="technology in engineeringTechnologies"
        :key="technology"
        prepend-icon="mdi-menu-right"
        density="compact"
        class="text-white"
      >
        {{ technology }}
      </v-list-item>
      <div :style="{
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: '5px',
        width: '100%',
        background: accentColor,
      }"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardAnimationWrapper from '../components/CardAnimationWrapper.vue';
import { ref } from 'vue'
import { useDisplay } from 'vuetify';
import { useAccentColors } from '../store/index'

const { lgAndUp } = useDisplay()

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
  'CAD, GIS',
  'project management',
])

const title = ref('Hi, I\'m Thomas')
const subtitle = ref('I like to solve challenging problems, anywhere... and to build solutions.')
const body = ref('I\'m an environmental engineer and technology advisor working on various chemical remediation design and implementation efforts throughout the US and helping digitize work efforts through software and database management. I also develop full - stack web applications for clients and myself. I enjoy the challenge of learning on the fly.')
</script>
