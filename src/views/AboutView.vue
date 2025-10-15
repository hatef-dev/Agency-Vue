<template>
  <the-header></the-header>
  <div class="mt-40 lg:mt-56">
    <about-page-header></about-page-header>
    <div class="my-container mt-16 flex flex-col gap-y-36 justify-center items-center">
      <transition-animation>
        <img src="/AboutPageImage.webp" alt="" class="w-full h-auto rounded-2xl" />
      </transition-animation>
      <transition-animation>
        <p class="text-white font-semibold text-4xl text-center w-[825px]">
          Empowering businesses with data-driven, user-focused strategies that elevate their online
          presence and transform their digital landscape
        </p>
      </transition-animation>
    </div>
  </div>
</template>
<script>
import AboutPageHeader from '@/components/AboutPage/AboutPageHeader.vue'
import TransitionAnimation from '@/components/Ui/TransitionAnimation.vue'
export default {
  name: 'AboutView',
  components: {
    AboutPageHeader,
    TransitionAnimation,
  },
}
</script>
