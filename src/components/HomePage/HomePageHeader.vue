<template>
  <div
    class="bg-[url('background.webp')] bg-cover bg-center bg-no-repeat w-full h-screen lg:h-[90vh] box-border"
  >
    <div class="my-container mt-5 lg:mt-25 flex flex-col gap-y-10">
      >
      <!--Image -->
      <transition mode="" appear @appear="enterImage">
        <img
          src="/laptop.webp"
          class="w-[200px] lg:w-[191px] lg:h-[226px] rounded-md"
          alt="laptop"
        />
      </transition>
      <!-- Title and description -->
      <div class="flex flex-col gap-y-4 lg:grid grid-cols-6">
        <transition name="" mode="" appear @appear="enterTitle">
          <h1 class="uppercase text-white text-4xl lg:text-8xl font-semibold col-span-5">
            Digital Agency for Your all Needs
          </h1>
        </transition>
        <div class="flex flex-col gap-y-4 col-span-1 justify-between x text-white">
          <transition name="" mode="" appear @appear="enterTitle">
            <p class="text-lg">
              Transforming your digital presence with innovative web design, intuitive app design,
              and branding
            </p>
          </transition>
          <transition name="" mode="" appear @appear="enterHeaderBtn">
            <the-button :backgroundSecondary="true">
              <template #label>Book A Call</template>
            </the-button>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import TheButton from '@/components/Btn/TheButton.vue'
export default {
  name: 'HomeView',
  components: { TheButton },
  methods: {
    enterImage(element) {
      gsap.fromTo(
        element,
        {
          scale: 0.8,
          opacity: 0,
        },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'sine.out' },
      )
    },
    enterTitle(element) {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 100,
        },
        { opacity: 1, y: 0, delay: 0.5, duration: 0.5, ease: 'sine.out' },
      )
    },
    enterHeaderBtn(element) {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 200,
        },
        { opacity: 1, y: 0, delay: 0.75, duration: 0.5, ease: 'sine.out' },
      )
    },
  },
}
</script>
