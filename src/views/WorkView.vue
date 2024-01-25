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
        >
          <template #content>
            <div :style="{
              height: lgAndUp ? 'calc((100vh - 80px - 30px) / 4)' : '300px',
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
                  <v-card-title style="font-size: 30px;">{{ project.title }}</v-card-title>
                  <v-card-subtitle>{{ project.date }}</v-card-subtitle>
                  <v-card-text class="d-flex justify-space-between mr-2">{{ getProjectType(index) }} {{ project.description }} 
                    <div>
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
                  </v-card-text>
                </div>
              </div>
            </div>
          </template>
        </CardAnimationWrapper>
      </div>
    </div>
    <div v-else>

    </div>
  </div>
</template>

<script setup lang="ts">
import CardAnimationWrapper from '../components/CardAnimationWrapper.vue';
import { useDisplay } from 'vuetify';
import { useProjectDetails } from '../store/index'

const { lgAndUp } = useDisplay()
const { projectData } = useProjectDetails()

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
