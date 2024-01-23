<template>
  <div class="d-flex justify-center">
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
            height: mdAndUp ? 'calc((100vh - 80px - 30px) / 4)' : '300px',
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
                  'background-color': 'rgba(0, 0, 0, 0.3)',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  transition: 'opacity 400ms ease-in-out',
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
</template>

<script setup lang="ts">
import CardAnimationWrapper from '../components/CardAnimationWrapper.vue';
import { useDisplay } from 'vuetify';
import { ref } from 'vue'

const { mdAndUp } = useDisplay()

const projectData = ref([
  {
    title: 'Timesheet',
    description: 'full-stack application to track employee hours and get management approval. Includes comprehensive review and employee management system.',
    date: '2023-2024',
    type: ['developed'],
    technologies: ['vue', 'postgresql', 'nodejs', 'google accounts'],
    image: '',
  },
  {
    title: 'BOSS Initiative',
    description: 'complete website mockup and implementation for a New Hampshire-based prison reform organization.',
    date: '2023-2024',
    type: ['designed', 'developed'],
    technologies: ['figma', 'vue', 'tailwind'],
    image: '',
  },
  {
    title: 'Markov Chains',
    description: 'application to simulate markov chains. Implemented UI features including drag-and-drop and complex markov node visual features.',
    date: '2023',
    type: ['developed'],
    technologies: ['vue', 'tailwind'],
    image: '',
  },
  {
    title: 'CoLab',
    description: 'hackathon project to allow for seamless integration of chemical and environmental lab data into engineering reports.',
    date: '2023',
    type: ['developed'],
    technologies: ['vue', 'nodejs', 'google sheets', 'google accounts'],
    image: '',
  },
  {
    title: 'Hanse Chat',
    description: 'web and mobile application to allow inter organizational communication between clients and suppliers on an international scale.',
    date: '2023',
    type: ['designed'],
    technologies: ['figma'],
    image: '',
  },
  {
    title: 'Clubs',
    description: 'front-end application to allow for arduino-controlled LED juggling clubs to be controlled remotely. Implemented simple UI to allow for instantaneous alteration of colors and patterns in real-time.',
    date: '2023',
    type: ['developed'],
    technologies: ['vue', 'arduino'],
    image: '',
  },
  {
    title: 'Artsite',
    description: 'full-stack blog-style application for text and image posts. Has like/dislike system as well as comments and admin controls.',
    date: '2023',
    type: ['developed'],
    technologies: ['vue', 'mongodb', 'nodejs'],
    image: '',
  },
  {
    title: 'Popout Portfolio',
    description: 'full-stack application to dynamically display user-created resume and experience details. User would create an account and include data to be displayed.',
    date: '2022',
    type: ['developed'],
    technologies: ['vue', 'mongodb', 'nodejs'],
    image: '',
  },
])

// type ListIndex<T extends number> = T extends T & T >= 0 & T < projectData.value.length ? T : never  

// type x = ListIndex<'dsaa'>

const capitalizeFirstLetter = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

const getProjectType = (index: number) => {
  if (index < 0 || index > projectData.value.length - 1) throw new Error('index not in range')
  const typesLength = projectData.value[index].type.length
  if (typesLength === 1) {
    const singleString = projectData.value[index].type[0]
    return capitalizeFirstLetter(singleString)
  }

  if (typesLength === 2) return capitalizeFirstLetter(projectData.value[index].type.join(' and '))

  const commaSeparated = projectData.value[index].type.slice(0, length - 1).join(', ')
  return `${commaSeparated}, and ${projectData.value[index].type[length - 1]}`
}

</script>

<style scoped>
.overlay:hover {
  opacity: 0;
}
</style>
