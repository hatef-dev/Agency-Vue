<template>
  <h1 class="text-white">Hatef</h1>
  <h1>{{ project.title }}</h1>
  <img :src="project.image" alt="Project" />
  <p>{{ project.tags }}</p>
</template>

<script>
import { mapState } from 'pinia'
import useProjectsStore from '@/stores/projects'
export default {
  name: 'ProjectView',
  computed: {
    ...mapState(useProjectsStore, ['getProjectByPath']),
    project() {
      return this.getProjectByPath(this.$route.params.id)
    },
  },
}
</script>
