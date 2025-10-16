<template>
  <the-header></the-header>
  <div class="mt-40 lg:mt-56 flex flex-col gap-y-4 justify-center items-center">
    <h1 class="text-white text-center text-3xl lg:text-8xl font-semibold uppercase w-full lg:w-5xl">
      Our Proven Success Stories
    </h1>
    <p class="text-white/60 text-lg text-center w-full lg:w-3xl">
      These strategies will not only help you attract new customers but also maintain a loyal
      following that keeps coming back
    </p>
    <div class="my-10">
      <the-projects></the-projects>
    </div>
    <the-footer></the-footer>
  </div>
</template>
<script>
import TheProjects from '@/components/TheProjects.vue'
import TheFooter from '@/components/TheFooter.vue'
export default {
  name: 'CaseStudiesView',
  components: {
    TheProjects,
    TheFooter,
  },
}
</script>
