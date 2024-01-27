import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProjectDetails = defineStore('projectDetails', () => {
  const projectData = ref([
    {
      title: 'Timesheet',
      description: 'full-stack application to track employee hours and get management approval. Includes comprehensive review and employee management system.',
      date: '2023-2024',
      type: ['developed'],
      technologies: ['vue', 'postgresql', 'nodejs', 'google oauth'],
      image: 'src\\assets\\images\\timesheetMain.png',
      supportingImages: [
        'src\\assets\\images\\timesheet1.png',
        'src\\assets\\images\\timesheet2.png', 
        'src\\assets\\images\\timesheet3.png', 
        'src\\assets\\images\\timesheet4.png'
      ],
      fullText: 'Timesheet leverages a robust internal api for data management including stores and types. Using a postgresql and node backend, data is typed and checked throughout the application from backend to presentation. This project was used to solidify my knowledge of pinia stores and internal reusable apis. It also helped me become more capable with SQL.',
      challenges: 'My biggest challenge was making sure the data was cached properly to improve loading times in an efficient and robust manner. I also had to learn a lot about internal apis which can be reused globally and dropped into other projects seamlessly, making it a truly reusable component.',
    },
    {
      title: 'BOSS Initiative',
      description: 'complete website mockup and implementation for a New Hampshire-based prison reform organization.',
      date: '2023-2024',
      type: ['designed', 'developed'],
      technologies: ['figma', 'vue', 'tailwind'],
      image: 'src\\assets\\images\\boss.png',
      supportingImages: [''],
      fullText: 'While this project was for a client, it was also used to improve my knowledge of and speed using tailwindcss and figma. This project allowed me to work on iterative designs and review client feedback regulary.',
      challenges: 'The biggest challenge for this was working with animations without a library.',
    },
    {
      title: 'Markov Chains',
      description: 'application to simulate markov chains. Implemented UI features including drag-and-drop and complex markov node visual features.',
      date: '2023',
      type: ['developed'],
      technologies: ['vue', 'tailwind'],
      image: 'src\\assets\\images\\markov1.png',
      supportingImages: [],
      fullText: 'This program allows users to simulate a markov chain though a simple, interactive user interface including dragging and dropping, color-coding, and easily-editable modes and weights.',
      challenges: 'The hardest part of this project for me was the draggable items and closely behind, the math involved with rotating the self-referencing arrow properly into open space so it does not clip with other arrows.',
    },
    {
      title: 'CoLab',
      description: 'hackathon project to allow for seamless integration of chemical and environmental lab data into engineering reports.',
      date: '2023',
      type: ['developed'],
      technologies: ['vue', 'nodejs', 'google sheets', 'google accounts'],
      image: 'src\\assets\\images\\colab1.png',
      supportingImages: ['src\\assets\\images\\colab2.png', ],
      fullText: 'This was a 36-hour project completed for a hackathon. It has a wide variety of features including auto-parsing and interpreting excel data, google authentication, multi-user editing, and, of course, report generation and approval processes.',
      challenges: 'The hardest part of this project for me was working with the excel spreadhseet data structures and having them interpreted regardless of the shape of the data fed into the parser.',
    },
    {
      title: 'Hanse Chat',
      description: 'web and mobile application to allow inter-organizational communication between clients and suppliers.',
      date: '2023',
      type: ['designed'],
      technologies: ['figma'],
      image: 'src\\assets\\images\\hanseMain.png',
      supportingImages: [
        'src\\assets\\images\\hanse1.png', 
        'src\\assets\\images\\hanse2.png', 
        'src\\assets\\images\\hanse3.png', 
        'src\\assets\\images\\hanse4.png', 
        'src\\assets\\images\\hanse5.png', 
        'src\\assets\\images\\hanse6.png'
      ],
      fullText: 'This was my first work for a client, and involved designing a chat system and comprehensive social media platform for inter-organizational communication. This was my first exposure to figma but since then I have continued to improve.',
      challenges: 'This was my first time using figma as well as sitting down and desiging something specifically for a user interface. This presented its own creative challenges as well as coming up with functional and simple UIs.',
    },
    {
      title: 'Clubs',
      description: 'front-end application to allow for arduino-controlled LED juggling clubs to be controlled remotely. Implemented simple UI to allow for instantaneous alteration of colors and patterns in real-time.',
      date: '2023',
      type: ['developed'],
      technologies: ['vue', 'arduino'],
      image: 'src\\assets\\images\\clubs1.png',
      supportingImages: [
        'src\\assets\\images\\clubs2.png', 
        'src\\assets\\images\\clubs3.png'
      ],
      fullText: 'A project I worked on with a juggler who needed a better way to update his LED juggling clubs in real time. The interface generates JSON strings which can be fed into an arduino interpreter either manually, or online through an API and server.',
      challenges: 'The hardest part of this was working on the connection to the arduino so that the clubs could be updated live during a performance.',
    },
    // {
    //   title: 'Artsite',
    //   description: 'full-stack blog-style application for text and image posts. Has like/dislike system as well as comments and admin controls.',
    //   date: '2023',
    //   type: ['developed'],
    //   technologies: ['vue', 'mongodb', 'nodejs'],
    //   image: 'src\\assets\\images\\artsite.png',
    //   supportingImages: [],
    //   fullText: '',
    //   challenges: '',
    // },
    // {
    //   title: 'Popout Portfolio',
    //   description: 'full-stack application to dynamically display user-created resume and experience details. User would create an account and include data to be displayed.',
    //   date: '2022',
    //   type: ['developed'],
    //   technologies: ['vue', 'mongodb', 'nodejs'],
    //   image: 'https://private-user-images.githubusercontent.com/46391052/300104190-b778c896-b94e-4012-9b41-6252a12d2012.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDYzMDA3MzAsIm5iZiI6MTcwNjMwMDQzMCwicGF0aCI6Ii80NjM5MTA1Mi8zMDAxMDQxOTAtYjc3OGM4OTYtYjk0ZS00MDEyLTliNDEtNjI1MmExMmQyMDEyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMjYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTI2VDIwMjAzMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTNhY2RjOTE3ZTM0MWU4ZmY5MjM2YTUwNDQwMjRhNWNjY2QyZWZjN2E1MDRjYmZiZmY2ODE2NjBjMmE5MzFhMmUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.dwvkQi9Yo6j2YiSn2hVA9OIe0mRU4wwlBfhs_nqYxXI',
    //   supportingImages: [],
    //   fullText: '',
    //   challenges: '',
    // },
  ])

  // maybe have list of logos as well or other images that look better on the front page
  // maybe have shorter list here as well of only the best ones?
  const getProjectImages = computed(() => projectData.value.map(project => project.image))

  return {
    projectData,
    getProjectImages,
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

