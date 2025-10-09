import { defineStore } from 'pinia'

export default defineStore('navigation', {
  state: () => ({
    links: [
      {
        label: 'Home',
        path: '/',
      },
      {
        label: 'About Us',
        path: '/about',
      },
      {
        label: 'Contact Us',
        path: '/contact',
      },
      {
        label: 'Case Studies',
        path: '/case-studies',
      },
    ],
  }),
})
