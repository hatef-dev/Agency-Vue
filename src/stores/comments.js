import { defineStore } from 'pinia'

export default defineStore('comments', {
  state: () => ({
    comments: [
      {
        id: 1,
        name: 'Lee Malia',
        comment:
          'Transforming your digital presence with innovative web design, intuitive app design, and impactful branding to drive business seccess.',
        image: '/person-1.jpg',
        work: 'User Interface Designer',
      },
      {
        id: 2,
        name: 'John Doe',
        comment: 'Partnering with a trusted agency to deliver exceptional digital experiences.',
        image: '/person-2.jpg',
        work: 'CEO of Company',
      },
      {
        id: 3,
        name: 'Mark Taylor',
        comment:
          'As a small business, we needed an agency that could scale with our growth delivered exceptional.',
        image: '/person-3.jpg',
        work: 'Founder of Local Eats',
      },
    ],
  }),
})
