<template>
  <div>
    <div 
      v-if="lgAndUp"
      class="d-flex justify-center"
    >
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
          v-for="(project, index) in projectData"
          :key="index"
          :format="{
            borderAnimation: false,
            border: true,
            hoverEffect: true,
            width: '100%',
          }"
          @click="showDialog = true, 
                  currentProjectDisplayIndex = index"
        >
          <template #content>
            <div :style="{
              height: 'calc((100vh - 80px - 30px) / 3.1)',
              width: '100%',
              position: 'relative',
            }">
              <v-img
                :style="{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }"
                  cover
                  :src="project.image"
                ></v-img>
                <div
                  :style="{
                    position: 'absolute',
                    'background-color': 'rgba(0, 0, 0, 0.1)',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }"
                ></div>
                <div
                  class="overlay d-flex align-end pl-3"
                  :style="{
                    position: 'absolute',
                    'background-color': 'rgba(0, 0, 0, 0.6)',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    transition: 'opacity 400ms ease-in-out',
                    cursor: 'pointer',
                  }"
                >
                <div>
                  <v-card-title 
                    :style="{
                      // 'font-size': '1.875rem',
                      'font-size': '3vh',
                    }"
                  >{{ project.title }}</v-card-title>
                  <v-card-subtitle>{{ project.date }}</v-card-subtitle>
                  <div class="ml-3">
                    <v-chip 
                      v-for="(technology) in projectData[index].technologies" 
                      :key="index"
                      label
                      size="x-small"
                      class="ml-1 mt-1"
                    >
                      {{ technology }}
                    </v-chip>
                  </div>
                  <v-card-text 
                    class="d-flex justify-space-between mr-2"
                    :style="{
                      'font-size': '2vh',
                    }"
                  >{{ getProjectType(index) }} {{ project.description }} </v-card-text>
                </div>
              </div>
            </div>
          </template>
        </CardAnimationWrapper>
        <p class="text-white">If you want to see all of my work, please visit my github.</p>
      </div>
    </div>

    <!-- --- --- --- -->

    <div v-else class="mt-14 pa-4" style="position: relative;">
      <v-card
        v-for="(project, index) in projectData"
        :key="index"
        :style="{
          background: '#181818',
        }"
        class="my-6"
        flat
      >
        <v-img
          @click="showDialog = true, currentProjectDisplayIndex = index"
          cover
          :src="project.image"
        ></v-img>
        <!-- title on alpha .4 background on image? rest below? -->
        <v-card-title
          class="text-white" 
          style="font-size: 1.875rem;"
        >{{ project.title }}</v-card-title>
        <v-card-subtitle class="text-white">{{ project.date }}</v-card-subtitle>
        <v-card-text class="d-flex justify-space-between mr-2 text-white">{{ getProjectType(index) }} {{ project.description }}</v-card-text>
        <v-chip 
          v-for="(technology) in projectData[index].technologies" 
          :key="index"
          label
          size="x-small"
          class="ml-1 mt-1 text-white"
        >
          {{ technology }}
        </v-chip>
      </v-card>
      <div :style="{
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: '5px',
        width: '100%',
        background: accentColor,
      }"></div>
    </div>

    <v-dialog
      v-model="showDialog"
      :fullscreen="true"
      :style="{
        background: '#181818',
      }"
    >
      <div style="position: relative;" class="pa-10">
        <v-btn 
          @click="showDialog = false"
          icon="mdi-arrow-left"
          variant="tonal"
          class="ma-5 rounded-lg"
          style="color: white;"
        ></v-btn>
        <div>
          <v-img
            :src="projectData[currentProjectDisplayIndex].image"
            style="max-height: 700px;"
          ></v-img>
          <div :style="{'margin-left': lgAndUp ? '10%' : ''}">
            <v-card-title 
              class="text-white" 
              style="font-size: 1.875rem;"
            >{{ projectData[currentProjectDisplayIndex].title }}</v-card-title>
            <v-card-text 
              class="d-flex justify-space-between ml-4 text-white" 
              style="max-width: 800px;"
            >{{ projectData[currentProjectDisplayIndex].fullText }}</v-card-text>
            <v-card-title 
              class="text-white" 
              style="font-size: 1.25rem;"
            >Challenges</v-card-title>
            <v-card-text 
              class="d-flex justify-space-between ml-4 text-white" 
              style="max-width: 800px;"
            >{{ projectData[currentProjectDisplayIndex].challenges }}</v-card-text>
            
          </div>
          <v-img
            v-for="(image, index) in projectData[currentProjectDisplayIndex].supportingImages"
            :key="index"
            :src="image"
            class="my-5"
            style="max-height: 600px;"
          ></v-img>
        </div>
        <div :style="{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '5px',
          width: '100%',
          background: accentColor,
        }"
        ></div>
      </div>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import CardAnimationWrapper from '../components/CardAnimationWrapper.vue';
import { ref } from 'vue'
import { useDisplay } from 'vuetify';
import { useProjectDetails, useAccentColors } from '../store/index'

const { lgAndUp } = useDisplay()
const { projectData } = useProjectDetails()
const { accentColor } = useAccentColors()


const showDialog = ref(false)
const currentProjectDisplayIndex = ref(0)

// type ListIndex<T extends number> = T extends T & T >= 0 & T < projectData.value.length ? T : never  

// type x = ListIndex<'dsaa'>

const capitalizeFirstLetter = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

const getProjectType = (index: number) => {
  if (index < 0 || index > projectData.length - 1) throw new Error('index not in range')
  const typesLength = projectData[index].type.length
  if (typesLength === 1) {
    const singleString = projectData[index].type[0]
    return capitalizeFirstLetter(singleString)
  }

  if (typesLength === 2) return capitalizeFirstLetter(projectData[index].type.join(' and '))

  const commaSeparated = projectData[index].type.slice(0, length - 1).join(', ')
  return `${commaSeparated}, and ${projectData[index].type[length - 1]}`
}

</script>

<style scoped>
.overlay:hover {
  opacity: 0;
}
</style>
