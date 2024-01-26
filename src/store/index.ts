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
      image: 'src\\assets\\timesheet.png',
      supportingImages: ['https://private-user-images.githubusercontent.com/46391052/300084173-0c226bb4-2482-4438-abeb-b71117ff2902.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDYyOTY0OTgsIm5iZiI6MTcwNjI5NjE5OCwicGF0aCI6Ii80NjM5MTA1Mi8zMDAwODQxNzMtMGMyMjZiYjQtMjQ4Mi00NDM4LWFiZWItYjcxMTE3ZmYyOTAyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMjYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTI2VDE5MDk1OFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTc3YzRjMzFhMDZmN2FiYjBlNTQ3MmRhMzcwNWFkOWRjMzRiNjdhODliN2YyMmQwMjU4YzgzNTc4NzY2MmI3YTcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.u26CTm1Da6Ccna34cpsl_QrpEdJ6pu7QSD3YO1Ehd28', 'https://private-user-images.githubusercontent.com/46391052/300084722-e1072987-15d0-4793-8025-4162ff569877.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDYyOTY0OTgsIm5iZiI6MTcwNjI5NjE5OCwicGF0aCI6Ii80NjM5MTA1Mi8zMDAwODQ3MjItZTEwNzI5ODctMTVkMC00NzkzLTgwMjUtNDE2MmZmNTY5ODc3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMjYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTI2VDE5MDk1OFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTg4N2Y5MDFkNWFkNTQ0MGQzM2UxYWQ4ZjdhNWRhZTA1MjU1ZjcxNjk4NGQ2M2IyZGE4ZGYyMmRiYTBmOWViZGQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.6Z4oGHOhlDx7PM1iP_lQk43nmaN5lAJ3c_7g35A7fmc', 'https://private-user-images.githubusercontent.com/46391052/300085104-6e98f96a-6944-4f71-bb37-f05fea185d1e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDYyOTY0OTgsIm5iZiI6MTcwNjI5NjE5OCwicGF0aCI6Ii80NjM5MTA1Mi8zMDAwODUxMDQtNmU5OGY5NmEtNjk0NC00ZjcxLWJiMzctZjA1ZmVhMTg1ZDFlLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMjYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTI2VDE5MDk1OFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTNmZTIzNWI0MGQ4ZjljNDM5YTI1NDY3MjVkZTY3MjAwZmVhYWY1MDFkN2VjZmUyYTRiYTBmZDY1NzU3MTIzMzAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.x7MbAr81ND4Uu-_x5LvhYJEJ_CtNmmInsL33PDkjLxk'],
      fullText: '',
      challenges: '',
    },
    {
      title: 'BOSS Initiative',
      description: 'complete website mockup and implementation for a New Hampshire-based prison reform organization.',
      date: '2023-2024',
      type: ['designed', 'developed'],
      technologies: ['figma', 'vue', 'tailwind'],
      image: 'src\\assets\\boss.png',
      supportingImages: [''],
      fullText: '',
      challenges: '',
    },
    {
      title: 'Markov Chains',
      description: 'application to simulate markov chains. Implemented UI features including drag-and-drop and complex markov node visual features.',
      date: '2023',
      type: ['developed'],
      technologies: ['vue', 'tailwind'],
      image: 'https://private-user-images.githubusercontent.com/76519301/286821231-5692441c-2383-4ae8-a4dc-39f5764a9c65.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDYyOTQyNjQsIm5iZiI6MTcwNjI5Mzk2NCwicGF0aCI6Ii83NjUxOTMwMS8yODY4MjEyMzEtNTY5MjQ0MWMtMjM4My00YWU4LWE0ZGMtMzlmNTc2NGE5YzY1LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMjYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTI2VDE4MzI0NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTgwMzEzOTY3MzdjMjAyZjY1NWRmMjllZTAzNDY0MGQ3ZjM5M2I0ZTQ0Y2IyN2VlNTI5Y2JhNGNlMzZjMjNmMTUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.xk7sXwnQOw8A6QOe7GUBPzFShWXjwLvsRHtglhOt3gc',
      supportingImages: [],
      fullText: '',
      challenges: '',
    },
    {
      title: 'CoLab',
      description: 'hackathon project to allow for seamless integration of chemical and environmental lab data into engineering reports.',
      date: '2023',
      type: ['developed'],
      technologies: ['vue', 'nodejs', 'google sheets', 'google accounts'],
      image: 'https://private-user-images.githubusercontent.com/76519301/282309985-1c7f858e-9886-436c-a1d2-a7d4231e6db2.svg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDYyOTQxMTIsIm5iZiI6MTcwNjI5MzgxMiwicGF0aCI6Ii83NjUxOTMwMS8yODIzMDk5ODUtMWM3Zjg1OGUtOTg4Ni00MzZjLWExZDItYTdkNDIzMWU2ZGIyLnN2Zz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMjYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTI2VDE4MzAxMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWFkNDYwYzQwZGQ0MDNlOWM1MzI0ZDg1Zjk2NzY4NjViMTMxMTUzN2ZhOWQ3N2MwMWVkODkxZDIxNDUwMDdkMWQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.4zhVZ8LFSf3u34Q3F2bXbxVyFWDRNQVPKCfWKfjlhaY',
      supportingImages: ['https://private-user-images.githubusercontent.com/76519301/282310052-83c5b95a-61ad-469b-a83c-5b3527d84004.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDYyOTM1MDMsIm5iZiI6MTcwNjI5MzIwMywicGF0aCI6Ii83NjUxOTMwMS8yODIzMTAwNTItODNjNWI5NWEtNjFhZC00NjliLWE4M2MtNWIzNTI3ZDg0MDA0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMjYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTI2VDE4MjAwM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTVmNmIyOGU4ZTVjMzZkMTc3YzIwOTJjMmNiYmFkZjAwNmYzNjhlOGM1NjZjZGEzYzJmMDkzY2UzYTcyYWNjNTYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.tE4d8549K8IhwUyfdIH3bC8ViwFfrK0uHtabl67ZoCE', ],
      fullText: '',
      challenges: '',
    },
    {
      title: 'Hanse Chat',
      description: 'web and mobile application to allow inter-organizational communication between clients and suppliers.',
      date: '2023',
      type: ['designed'],
      technologies: ['figma'],
      image: 'src\\assets\\hanseMain.png',
      supportingImages: ['src\\assets\\hanse1.png', 'src\\assets\\hanse2.png', 'src\\assets\\hanse3.png', 'src\\assets\\hanse4.png'],
      fullText: '',
      challenges: '',
    },
    {
      title: 'Clubs',
      description: 'front-end application to allow for arduino-controlled LED juggling clubs to be controlled remotely. Implemented simple UI to allow for instantaneous alteration of colors and patterns in real-time.',
      date: '2023',
      type: ['developed'],
      technologies: ['vue', 'arduino'],
      image: 'https://private-user-images.githubusercontent.com/46391052/300101563-ff41610c-22d1-43bc-aed2-56634ce1ebac.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDYzMDAxNjQsIm5iZiI6MTcwNjI5OTg2NCwicGF0aCI6Ii80NjM5MTA1Mi8zMDAxMDE1NjMtZmY0MTYxMGMtMjJkMS00M2JjLWFlZDItNTY2MzRjZTFlYmFjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMjYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTI2VDIwMTEwNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWNhN2Q1MzFiYTRjNmU3NmY3NmUzNGNkYjBiYjU1ZTM3NWJhZjNiYTdjZGU0MDc5OTE4MDNhMGVhNzYwOGQ1MGQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.jYwv6lBfUeHBK9UTwL4vTxda5tjZLt7UigyrwWWeLAI',
      supportingImages: ['https://private-user-images.githubusercontent.com/46391052/300101902-2426beae-a332-4b9e-b1e1-768d9145ad0c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDYzMDAxNjQsIm5iZiI6MTcwNjI5OTg2NCwicGF0aCI6Ii80NjM5MTA1Mi8zMDAxMDE5MDItMjQyNmJlYWUtYTMzMi00YjllLWIxZTEtNzY4ZDkxNDVhZDBjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMjYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTI2VDIwMTEwNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTQxNDkwZTA3NjRjMGI5M2IwMThjZDczNGZkNTJhZTRiN2JiMWEzYTA3ZjAxM2NlOThiOWQ0ZGNiZDEzOTgwZTYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.-cR-hTvqQ0dxF_TwHFsKXpqmeI6vROLFNaCAUT_6IXQ', 'https://private-user-images.githubusercontent.com/46391052/300102178-6f2bf219-fad0-4237-aefc-0fa8a233472c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDYzMDAxNjQsIm5iZiI6MTcwNjI5OTg2NCwicGF0aCI6Ii80NjM5MTA1Mi8zMDAxMDIxNzgtNmYyYmYyMTktZmFkMC00MjM3LWFlZmMtMGZhOGEyMzM0NzJjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMjYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTI2VDIwMTEwNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWJkMTNiYjI3NGRmMGM5NWZkNDMzOWM4ZTU0ZjFiY2U2OTc0Mzg5MjhjYTc5YWE2MWRlMWU3MmZjZmUwYzE1NjcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.jpkdi-P9zmfpde1WJ8X8TBMvbR_LaFCB7VkliXbWKJU'],
      fullText: '',
      challenges: '',
    },
    // {
    //   title: 'Artsite',
    //   description: 'full-stack blog-style application for text and image posts. Has like/dislike system as well as comments and admin controls.',
    //   date: '2023',
    //   type: ['developed'],
    //   technologies: ['vue', 'mongodb', 'nodejs'],
    //   image: 'src\\assets\\artsite.png',
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

