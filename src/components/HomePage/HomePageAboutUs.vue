<template>
  <div class="my-container flex flex-col gap-y-15">
    <!-- About Us Header -->
    <transition appear @enter="enterAboutUsHeader">
      <div class="flex flex-col gap-y-2 lg:grid grid-cols-5 items-start">
        <div class="col-span-2 flex items-center gap-x-2">
          <!-- dot -->
          <span class="w-2 h-2 bg-red-500 rounded-full"></span>
          <span class="text-white">About Us</span>
        </div>
        <div class="col-span-3">
          <p class="text-white text-lg lg:text-5xl font-medium">
            <slot name="description"
              >Transforming your digital presence with innovative web design, intuitive app design,
              and impactful branding to drive business seccess</slot
            >
          </p>
        </div>
      </div>
    </transition>
    <!-- About Us Content -->
    <transition appear @enter="enterAboutUsContent">
      <div class="flex flex-col gap-y-2 lg:grid grid-cols-5">
        <!-- Image -->
        <div class="col-span-2 lg:pr-20">
          <img src="/AboutUs.webp" class="w-full rounded-md" alt="About Us" />
        </div>
        <!-- Content -->
        <div class="col-span-3 flex flex-col gap-y-10">
          <h4 class="text-[#fffc] text-xl">Numbers</h4>
          <div class="flex justify-between lg:justify-start lg:flex-col lg:gap-y-10">
            <div class="flex flex-col gap-y-2">
              <div class="flex justify-center items-center">
                <the-countdown target="1232" duration="1"></the-countdown>
              </div>
              <div class="flex justify-center items-center">
                <span class="text-[#fffc] text-xl">Clients Worldwide</span>
              </div>
            </div>
            <div class="flex flex-col gap-y-2">
              <div class="flex justify-center items-center">
                <the-countdown target="13" duration="1"></the-countdown>
              </div>
              <div class="flex justify-center items-center">
                <span class="text-[#fffc] text-xl">Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import TheCountdown from '../Ui/TheCountdown.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
export default {
  components: { TheCountdown },
  name: 'HomePageAboutUs',
  methods: {
    enterAboutUsHeader(element, done) {
      gsap.registerPlugin(ScrollTrigger)

      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 100,
        },
        {
          scrollTrigger: element,
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'sine.out',
          onComplete: done,
        },
      )
    },
    enterAboutUsContent(element, done) {
      gsap.registerPlugin(ScrollTrigger)

      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 100,
        },
        {
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            once: true,
          },
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'sine.out',
          onComplete: done,
        },
      )
    },
  },
}
</script>
