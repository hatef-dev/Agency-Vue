import { defineStore } from 'pinia'

export default defineStore('projects', {
  state: () => ({
    projects: [
      {
        title: 'Design Nexus',
        image: '/project-1.webp',
        path: '/project-design-nexus',
        tags: ['Web Design', 'Motion Design', 'Branding'],
      },
      {
        title: 'Mockup Forge',
        image: '/project-2.webp',
        path: '/project-mockup-forge',
        tags: ['Web', 'Mobile', 'App'],
      },
      {
        title: 'Creative Pixel Lab',
        image: '/project-1.webp',
        path: '/project-creative-pixel-lab',
        tags: ['Web', 'Mobile', 'App'],
      },
      {
        title: 'Aesthetic Art',
        image: '/project-2.webp',
        path: '/project-aesthetic-art',
        tags: ['Web', 'Mobile', 'App'],
      },
    ],
  }),
})
