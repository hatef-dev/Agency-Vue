<template>
  <the-header></the-header>
  <div class="mt-24 lg:mt-56 flex flex-col gap-y-16">
    <project-page-header
      :title="project.title"
      :tags="project.tags"
      :image="project.image"
    ></project-page-header>
    <project-page-main :projectDetails="project.projectDetails"></project-page-main>
    <the-footer></the-footer>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import useProjectsStore from '@/stores/projects'
import ProjectPageHeader from '@/components/ProjectPage/ProjectPageHeader.vue'
import ProjectPageMain from '@/components/ProjectPage/ProjectPageMain.vue'
import TheFooter from '@/components/TheFooter.vue'
export default {
  name: 'ProjectView',
  components: { ProjectPageHeader, ProjectPageMain, TheFooter },
  computed: {
    ...mapState(useProjectsStore, ['getProjectByPath']),
    project() {
      return this.getProjectByPath(this.$route.params.id)
    },
  },
}
</script>
