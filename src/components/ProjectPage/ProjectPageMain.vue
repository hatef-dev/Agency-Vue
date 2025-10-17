<template>
  <div class="my-container">
    <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-y-16 gap-x-3">
      <transition-animation class="col-span-1">
        <div class="flex flex-col gap-y-10">
          <div class="flex flex-col gap-y-1">
            <h3 class="text-white text-2xl font-semibold uppercase">Client</h3>
            <span class="text-white/40 text-2xl font-semibold">{{ projectDetails.cliets }}</span>
          </div>
          <div class="flex flex-col gap-y-1">
            <h3 class="text-white text-2xl font-semibold uppercase">Projects</h3>
            <span class="text-white/40 text-2xl font-semibold">{{ projectDetails.projects }}</span>
          </div>
          <div class="flex flex-col gap-y-1">
            <h3 class="text-white text-2xl font-semibold uppercase">Date</h3>
            <span class="text-white/40 text-2xl font-semibold">{{ projectDetails.date }}</span>
          </div>
          <div class="flex flex-col gap-y-1">
            <h3 class="text-white text-2xl font-semibold uppercase">Location</h3>
            <span class="text-white/40 text-2xl font-semibold">{{ projectDetails.location }}</span>
          </div>
        </div>
      </transition-animation>
      <transition-animation class="col-span-1">
        <div class="flex flex-col gap-y-10">
          <div class="flex flex-col gap-y-1">
            <h3 class="text-white text-2xl font-semibold uppercase">Overview</h3>
            <span class="text-white/40 text-lg font-semibold">{{ projectDetails.overview }}</span>
          </div>
          <div class="flex flex-col gap-y-1">
            <h3 class="text-white text-2xl font-semibold uppercase">Problems</h3>
            <span class="text-white/40 text-lg font-semibold">{{ projectDetails.problems }}</span>
          </div>
        </div>
      </transition-animation>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-2 mt-10">
      <transition-animation v-for="image in images" :key="image">
        <img :src="image" alt="image" class="w-full h-auto" />
      </transition-animation>
    </div>
    <div class="flex flex-col gap-y-10 mt-10">
      <transition-animation
        class="flex flex-col gap-y-3 lg:px-10"
        v-for="projectOverview in projectOverviews"
        :key="projectOverview.title"
      >
        <div>
          <h3 class="text-white text-3xl font-semibold">{{ projectOverview.title }}</h3>
          <span class="text-white/60 text-lg font-semibold">{{ projectOverview.content }}</span>
        </div>
      </transition-animation>
    </div>
  </div>
</template>
<script>
import TransitionAnimation from '../Ui/TransitionAnimation.vue'
export default {
  components: { TransitionAnimation },
  name: 'ProjectPageMain',
  props: {
    projectDetails: {
      type: Object,
      required: true,
    },
  },
  computed: {
    images() {
      return this.projectDetails.images
    },
    projectOverviews() {
      return this.projectDetails.projectOverviews
    },
  },
}
</script>
