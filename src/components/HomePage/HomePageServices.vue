<template>
  <div class="flex flex-col gap-y-4 lg:gap-y-10 my-container">
    <!-- dot -->
    <transition-animation>
      <div class="flex items-center justify-center gap-x-2">
        <!-- dot --><span class="w-2 h-2 bg-red-500 rounded-full"></span
        ><span class="text-white">Services</span>
      </div>
    </transition-animation>

    <div class="flex flex-col">
      <transition-animation v-for="service in services" :key="service.id">
        <div
          class="flex px-5 relative lg:px-20 group justify-between items-center w-full overflow-hidden py-2 lg:py-10 lg:gap-x-10 text-white border-b-2 border-white/50"
        >
          <div
            class="bg-[#1E1E1E] w-full left-0 -z-10 h-full -bottom-full absolute rounded-t-2xl transition-all duration-500 ease-out group-hover:bottom-0"
          ></div>
          <span class="">00{{ service.id }}</span>
          <h1
            class="text-xl lg:text-[80px]/17 font-semibold uppercase text-center lg:px-10 lg:w-[540px]"
          >
            {{ service.title }}
          </h1>
          <transition appear @enter="enterImage">
            <img
              :src="service.image"
              class="hidden overflow-hidden lg:block w-52 rounded-md"
              alt="Services"
            />
          </transition>
        </div>
      </transition-animation>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import useServicesStore from '@/stores/services'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TransitionAnimation from '../Ui/TransitionAnimation.vue'
export default {
  components: { TransitionAnimation },
  name: 'HomePageServices',
  methods: {
    enterImage(el, done) {
      gsap.registerPlugin(ScrollTrigger)
      gsap.fromTo(
        el,
        {
          opacity: 0,
          x: 1000,
          rotate: 360,
        },
        {
          scrollTrigger: {
            trigger: el,
            once: true,
          },
          opacity: 1,
          x: 0,
          rotate: 0,
          duration: 0.75,
          ease: 'circ.out',
          onComplete: done,
        },
      )
    },
  },
  computed: {
    ...mapState(useServicesStore, ['services']),
  },
}
</script>
