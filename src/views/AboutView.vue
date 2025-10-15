<template>
  <div class="mt-40 lg:mt-56">
    <about-page-header></about-page-header>
    <div class="my-container my-32 flex flex-col gap-y-10 lg:gap-y-36 justify-center items-center">
      <transition-animation>
        <img src="/AboutPageImage.webp" alt="" class="w-full h-auto rounded-2xl" />
      </transition-animation>

      <p class="text-white font-semibold text-xl lg:text-4xl text-center w-full lg:w-[825px]">
        Empowering businesses with data-driven, user-focused strategies that elevate their online
        presence and transform their digital landscape
      </p>
    </div>
    <div class="flex flex-col gap-y-10 lg:gap-y-35">
      <AboutPageWhoWeAre />
      <AboutPageTeam />
      <the-footer></the-footer>
    </div>
    <the-header></the-header>
  </div>
</template>
<script>
import AboutPageHeader from '@/components/AboutPage/AboutPageHeader.vue'
import AboutPageWhoWeAre from '@/components/AboutPage/AboutPageWhoWeAre.vue'
import AboutPageTeam from '@/components/AboutPage/AboutPageTeam.vue'
import TheFooter from '@/components/TheFooter.vue'
export default {
  name: 'AboutView',
  components: {
    AboutPageHeader,
    AboutPageWhoWeAre,
    AboutPageTeam,
    TheFooter,
  },
}
</script>
