import { defineStore } from 'pinia'

export default defineStore('services', {
  state: () => ({
    services: [
      {
        title: 'Website Design',
        id: 1,
        image: '/web-design.webp',
      },
      {
        title: 'Motion Design',
        id: 2,
        image: '/motion-design.webp',
      },
      {
        title: 'Mobile App Design',
        id: 3,
        image: '/mobile-app-design.webp',
      },
      {
        title: 'Seo & Marketing',
        id: 4,
        image: '/seo-marketing.webp',
      },
    ],
  }),
})
