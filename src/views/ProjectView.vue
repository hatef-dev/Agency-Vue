<template>
  <the-header></the-header>
  <div class="mt-40 lg:mt-56">
    <project-page-header
      :title="project.title"
      :tags="project.tags"
      :image="project.image"
    ></project-page-header>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import useProjectsStore from '@/stores/projects'
import ProjectPageHeader from '@/components/ProjectPage/ProjectPageHeader.vue'
export default {
  name: 'ProjectView',
  components: { ProjectPageHeader },
  computed: {
    ...mapState(useProjectsStore, ['getProjectByPath']),
    project() {
      return this.getProjectByPath(this.$route.params.id)
    },
  },
}
</script>
