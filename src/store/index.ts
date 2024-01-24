import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProjectDetails = defineStore('projectDetails', () => {
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

  return {
    projectData,
  }
})

export const useAccentColors = defineStore('accentColors', () => {
  const primaryColors = ref([
    '#FF0000', // Red
    '#00FF00', // Green
    '#FFFF00', // Yellow
    '#00FFFF', // Cyan
    '#9370DB', // Lavender Purple
  ])
  const accentColor = computed(() => primaryColors.value[Math.floor(Math.random() * primaryColors.value.length)])

  return {
    accentColor,
  }
})

