import { defineStore } from 'pinia'

export default defineStore('Team', {
  state: () => ({
    Team: [
      {
        name: 'John Doe',
        id: 1,
        image: '/team/user-1.webp',
        work: 'President of sales',
        linkedin: 'https://www.linkedin.com/in/hatef-sanati/',
        instagram: 'https://www.instagram.com/hatef.dev/',
      },
      {
        name: 'Darrell Steward',
        id: 2,
        image: '/team/user-1.webp',
        work: 'President of sales',
        linkedin: 'https://www.linkedin.com/in/hatef-sanati/',
        instagram: 'https://www.instagram.com/hatef.dev/',
      },
      {
        name: 'Cameron Williamson',
        id: 3,
        image: '/team/user-1.webp',
        work: 'President of sales',
        linkedin: 'https://www.linkedin.com/in/hatef-sanati/',
        instagram: 'https://www.instagram.com/hatef.dev/',
      },
      {
        name: 'Marvin McKinney',
        id: 4,
        image: '/team/user-1.webp',
        work: 'President of sales',
        linkedin: 'https://www.linkedin.com/in/hatef-sanati/',
        instagram: 'https://www.instagram.com/hatef.dev/',
      },
    ],
  }),
})
