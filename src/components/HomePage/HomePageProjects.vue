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
      <div class="grid grid-cols-2 gap-6">
        <div v-for="project in projects" :key="project.title" class="relative group">
          <img :src="project.image" :alt="project.title" class="rounded-2xl" />
          <div
            class="absolute -z-0 transition-all opacity-0 group-hover:opacity-100 duration-200 ease-in-out backdrop-blur-xs brightness-50 w-full h-full left-0 top-0 rounded-2xl"
          ></div>
        </div>
      </div>
    </transition-animation>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import useProjectsStore from '@/stores/projects'

export default {
  name: 'HomePageProjects',
  computed: {
    ...mapState(useProjectsStore, ['projects']),
  },
}
</script>
