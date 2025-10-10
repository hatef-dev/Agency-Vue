import { defineStore } from 'pinia'

export default defineStore('projects', {
  state: () => ({
    projects: [
      {
        title: 'Design Nexus',
        id: 1,
        image: '/project-1.webp',
        path: 'project-design-nexus',
        tags: ['Web Design', 'Motion Design', 'Branding'],
      },
      {
        title: 'Mockup Forge',
        id: 2,
        image: '/project-2.webp',
        path: 'project-mockup-forge',
        tags: ['Web', 'Mobile', 'App'],
      },
      {
        title: 'Creative Pixel Lab',
        id: 3,
        image: '/project-1.webp',
        path: 'project-creative-pixel-lab',
        tags: ['Web', 'Mobile', 'App'],
      },
      {
        title: 'Aesthetic Art',
        id: 4,
        image: '/project-2.webp',
        path: 'project-aesthetic-art',
        tags: ['Web', 'Mobile', 'App'],
      },
    ],
  }),
  getters: {
    getProjectByPath: (state) => (path) => {
      return state.projects.find((project) => project.path === path)
    },
  },
})
