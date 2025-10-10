<template>
  <div class="flex flex-col gap-y-4 lg:gap-y-10 my-container">
    <!-- Dot-->
    <transition-animation>
      <div class="flex items-center justify-center gap-x-2">
        <!-- dot --><span class="w-2 h-2 bg-red-500 rounded-full"></span
        ><span class="text-white">Projects</span>
      </div>
    </transition-animation>

    <transition-animation>
      <div class="flex justify-center items-center">
        <h1 class="uppercase text-white text-4xl lg:text-8xl font-semibold">Recent Projects</h1>
      </div>
    </transition-animation>

    <transition-animation>
      <div class="grid grid-cols-1 gap-y-3 lg:grid-cols-2 lg:gap-6">
        <div v-for="project in projects" :key="project.title" class="relative group/project">
          <img :src="project.image" :alt="project.title" class="rounded-2xl" />
          <div
            class="absolute -z-0 transition-all opacity-0 group-hover/project:opacity-100 duration-500 ease-in-out backdrop-blur-xs brightness-50 w-full h-full left-0 top-0 rounded-2xl"
          ></div>
          <div
            class="absolute flex justify-center items-center w-full h-full opacity-0 group-hover/project:opacity-100 duration-200 ease-in-out left-0 top-0 rounded-2xl"
          >
            <the-button
              :path="{ name: 'project', params: { id: project.path } }"
              :backgroundSecondary="true"
            >
              <template #label> View Project </template>
            </the-button>
          </div>
          <div class="absolute w-full top-0 left-0 h-full pointer-events-none z-10 flex">
            <div class="self-end w-full px-6 flex flex-col gap-y-6 mb-6">
              <h3 class="text-white text-2xl lg:text-5xl">
                {{ project.title }}
              </h3>
              <div class="flex gap-x-2 items-center">
                <tag-button v-for="tag in project.tags" :key="tag">{{ tag }}</tag-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition-animation>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import useProjectsStore from '@/stores/projects'
import TagButton from '../Btn/TagButton.vue'

export default {
  components: { TagButton },
  name: 'HomePageProjects',
  computed: {
    ...mapState(useProjectsStore, ['projects']),
  },
}
</script>
