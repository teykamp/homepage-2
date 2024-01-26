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
      image: 'src\\assets\\timesheetMain.png',
      supportingImages: ['https://private-user-images.githubusercontent.com/46391052/300083467-75f8446b-0173-464e-b384-1ef4bf3d5d01.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDYzMDc5MzMsIm5iZiI6MTcwNjMwNzYzMywicGF0aCI6Ii80NjM5MTA1Mi8zMDAwODM0NjctNzVmODQ0NmItMDE3My00NjRlLWIzODQtMWVmNGJmM2Q1ZDAxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMjYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTI2VDIyMjAzM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTUyMWNjNDJhOGY1OWEwNDEzYmFiMGQ3Njg4OTI5YzE4YzZmZWNkNmZjNGVhNzgwOTM1MmYzM2IyOTYzYTI3ZjQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.fzP740zpUHFmB1cNygt7hiOokG4Rt5XTvLrYb5Ze6Z8', 'https://private-user-images.githubusercontent.com/46391052/300084173-0c226bb4-2482-4438-abeb-b71117ff2902.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDYzMDc5MzMsIm5iZiI6MTcwNjMwNzYzMywicGF0aCI6Ii80NjM5MTA1Mi8zMDAwODQxNzMtMGMyMjZiYjQtMjQ4Mi00NDM4LWFiZWItYjcxMTE3ZmYyOTAyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMjYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTI2VDIyMjAzM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWU5N2U5NzY4Zjk5MjgzOGExOWM1OWZlYzhmZjM5MDI5ZWRmYWVmNTI3OTIyMjg1ZjM0YzlhZGE4ODI1YjQxMGUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.gv5rJvNfElXtrPkpWH176SWpIsatK6fQaAOiWGoexJc', 'https://private-user-images.githubusercontent.com/46391052/300084722-e1072987-15d0-4793-8025-4162ff569877.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDYzMDc5MzMsIm5iZiI6MTcwNjMwNzYzMywicGF0aCI6Ii80NjM5MTA1Mi8zMDAwODQ3MjItZTEwNzI5ODctMTVkMC00NzkzLTgwMjUtNDE2MmZmNTY5ODc3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMjYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTI2VDIyMjAzM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWFjNThhOTQ0NTZiNTgyM2ZjOTA5ZDYwOTNkZmUxYzIwZjljYTY2MmFjNWQ4MDAxM2NmY2M1YmY3NWE5ZmQ1OTImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.p7AqLDr73NLECv-xynw7-QjJEEM7tAlf0_Xi8jTUGjg', 'https://private-user-images.githubusercontent.com/46391052/300085104-6e98f96a-6944-4f71-bb37-f05fea185d1e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDYzMDc5MzMsIm5iZiI6MTcwNjMwNzYzMywicGF0aCI6Ii80NjM5MTA1Mi8zMDAwODUxMDQtNmU5OGY5NmEtNjk0NC00ZjcxLWJiMzctZjA1ZmVhMTg1ZDFlLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMjYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTI2VDIyMjAzM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWNhN2FiMzA0ZmNmYzIyN2VlMjYyMDMyMTFmYTE5ZGM5YzY2MDZjMDY3NGUzNzA0OTUxMTJiNzcxZTM1YWUwZGMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.Ry8qSuoM0TNzt4_ALaVVTk-6h8Y-9aWaIKQWpXzfESQ'],
      fullText: 'Timesheet leverages a robust internal api for data management including stores and types. Using a postgresql and node backend, data is typed and checked throughout the application from backend to presentation. This project was used to solidify my knowledge of pinia stores and internal reusable apis. It also helped me become more capable with SQL.',
      challenges: 'My biggest challenge was making sure the data was cached properly to improve loading times in an efficient and robust manner. I also had to learn a lot about internal apis which can be reused globally and dropped into other projects seamlessly, making it a truly reusable component.',
    },
    {
      title: 'BOSS Initiative',
      description: 'complete website mockup and implementation for a New Hampshire-based prison reform organization.',
      date: '2023-2024',
      type: ['designed', 'developed'],
      technologies: ['figma', 'vue', 'tailwind'],
      image: 'src\\assets\\boss.png',
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
      image: 'https://private-user-images.githubusercontent.com/76519301/286821231-5692441c-2383-4ae8-a4dc-39f5764a9c65.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDYyOTQyNjQsIm5iZiI6MTcwNjI5Mzk2NCwicGF0aCI6Ii83NjUxOTMwMS8yODY4MjEyMzEtNTY5MjQ0MWMtMjM4My00YWU4LWE0ZGMtMzlmNTc2NGE5YzY1LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMjYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTI2VDE4MzI0NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTgwMzEzOTY3MzdjMjAyZjY1NWRmMjllZTAzNDY0MGQ3ZjM5M2I0ZTQ0Y2IyN2VlNTI5Y2JhNGNlMzZjMjNmMTUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.xk7sXwnQOw8A6QOe7GUBPzFShWXjwLvsRHtglhOt3gc',
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
      image: 'https://private-user-images.githubusercontent.com/76519301/282309985-1c7f858e-9886-436c-a1d2-a7d4231e6db2.svg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDYyOTQxMTIsIm5iZiI6MTcwNjI5MzgxMiwicGF0aCI6Ii83NjUxOTMwMS8yODIzMDk5ODUtMWM3Zjg1OGUtOTg4Ni00MzZjLWExZDItYTdkNDIzMWU2ZGIyLnN2Zz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMjYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTI2VDE4MzAxMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWFkNDYwYzQwZGQ0MDNlOWM1MzI0ZDg1Zjk2NzY4NjViMTMxMTUzN2ZhOWQ3N2MwMWVkODkxZDIxNDUwMDdkMWQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.4zhVZ8LFSf3u34Q3F2bXbxVyFWDRNQVPKCfWKfjlhaY',
      supportingImages: ['https://private-user-images.githubusercontent.com/76519301/282310052-83c5b95a-61ad-469b-a83c-5b3527d84004.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDYyOTM1MDMsIm5iZiI6MTcwNjI5MzIwMywicGF0aCI6Ii83NjUxOTMwMS8yODIzMTAwNTItODNjNWI5NWEtNjFhZC00NjliLWE4M2MtNWIzNTI3ZDg0MDA0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMjYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTI2VDE4MjAwM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTVmNmIyOGU4ZTVjMzZkMTc3YzIwOTJjMmNiYmFkZjAwNmYzNjhlOGM1NjZjZGEzYzJmMDkzY2UzYTcyYWNjNTYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.tE4d8549K8IhwUyfdIH3bC8ViwFfrK0uHtabl67ZoCE', ],
      fullText: 'This was a 36-hour project completed for a hackathon. It has a wide variety of features including auto-parsing and interpreting excel data, google authentication, multi-user editing, and, of course, report generation and approval processes.',
      challenges: 'The hardest part of this project for me was working with the excel spreadhseet data structures and having them interpreted regardless of the shape of the data fed into the parser.',
    },
    {
      title: 'Hanse Chat',
      description: 'web and mobile application to allow inter-organizational communication between clients and suppliers.',
      date: '2023',
      type: ['designed'],
      technologies: ['figma'],
      image: 'src\\assets\\hanseMain.png',
      supportingImages: ['src\\assets\\hanse1.png', 'src\\assets\\hanse2.png', 'src\\assets\\hanse3.png', 'src\\assets\\hanse4.png', 'src\\assets\\hanse5.png', 'src\\assets\\hanse6.png'],
      fullText: 'This was my first work for a client, and involved designing a chat system and comprehensive social media platform for inter-organizational communication. This was my first exposure to figma but since then I have continued to improve.',
      challenges: 'This was my first time using figma as well as sitting down and desiging something specifically for a user interface. This presented its own creative challenges as well as coming up with functional and simple UIs.',
    },
    {
      title: 'Clubs',
      description: 'front-end application to allow for arduino-controlled LED juggling clubs to be controlled remotely. Implemented simple UI to allow for instantaneous alteration of colors and patterns in real-time.',
      date: '2023',
      type: ['developed'],
      technologies: ['vue', 'arduino'],
      image: 'https://private-user-images.githubusercontent.com/46391052/300101563-ff41610c-22d1-43bc-aed2-56634ce1ebac.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDYzMDAxNjQsIm5iZiI6MTcwNjI5OTg2NCwicGF0aCI6Ii80NjM5MTA1Mi8zMDAxMDE1NjMtZmY0MTYxMGMtMjJkMS00M2JjLWFlZDItNTY2MzRjZTFlYmFjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMjYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTI2VDIwMTEwNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWNhN2Q1MzFiYTRjNmU3NmY3NmUzNGNkYjBiYjU1ZTM3NWJhZjNiYTdjZGU0MDc5OTE4MDNhMGVhNzYwOGQ1MGQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.jYwv6lBfUeHBK9UTwL4vTxda5tjZLt7UigyrwWWeLAI',
      supportingImages: ['https://private-user-images.githubusercontent.com/46391052/300101902-2426beae-a332-4b9e-b1e1-768d9145ad0c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDYzMDgyNDMsIm5iZiI6MTcwNjMwNzk0MywicGF0aCI6Ii80NjM5MTA1Mi8zMDAxMDE5MDItMjQyNmJlYWUtYTMzMi00YjllLWIxZTEtNzY4ZDkxNDVhZDBjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMjYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTI2VDIyMjU0M1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTdjZDUyODgyNDdiZDM2YjVkNDgxNTA4MDg3Y2U3MzQ3NmMwNDVlNDNhMjYzNmM3ZjQyMjBhNGQ5MTE4MDRkN2MmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.jstCRdhMl5M7uG4N1_pel6azZmsGllsKaleXogCjvIc', 'https://private-user-images.githubusercontent.com/46391052/300102178-6f2bf219-fad0-4237-aefc-0fa8a233472c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDYzMDgyNDMsIm5iZiI6MTcwNjMwNzk0MywicGF0aCI6Ii80NjM5MTA1Mi8zMDAxMDIxNzgtNmYyYmYyMTktZmFkMC00MjM3LWFlZmMtMGZhOGEyMzM0NzJjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMjYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTI2VDIyMjU0M1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTZjOWFjNzU5ODk0YjRjYmUzZjQ3ZTNiOGFmYzkwMjI3Yzg4MDY5MGZlZTQ0ZTA3NGU2MTAwMzkzMjNlYjk3NDEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.q6ER5vcTDzH2PEReklbpASCma4cwT1qFPYEpWA9cPRw'],
      fullText: 'A project I worked on with a juggler who needed a better way to update his LED juggling clubs in real time. The interface generates JSON strings which can be fed into an arduino interpreter either manually, or online through an API and server.',
      challenges: 'The hardest part of this was working on the connection to the arduino so that the clubs could be updated live during a performance.',
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

