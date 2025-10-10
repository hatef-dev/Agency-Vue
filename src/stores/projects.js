import { defineStore } from 'pinia'

export default defineStore('projects', {
  state: () => ({
    projects: [
      {
        title: 'Design Nexus',
        image: '/project-1.webp',
        path: '/project-design-nexus',
      },
      {
        title: 'Mockup Forge',
        image: '/project-2.webp',
        path: '/project-mockup-forge',
      },
      {
        title: 'Creative Pixel Lab',

        image: '/project-1.webp',
        path: '/project-creative-pixel-lab',
      },
      {
        title: 'Aesthetic Art',
        image: '/project-2.webp',
        path: '/project-aesthetic-art',
      },
    ],
  }),
})
