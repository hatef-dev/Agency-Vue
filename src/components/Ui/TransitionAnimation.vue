<template>
  <transition @enter="enter" appear>
    <slot></slot>
  </transition>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
export default {
  name: 'TransitionAnimation',
  props: {
    duration: {
      type: Number,
      default: 0.5,
    },
    y: {
      type: Number,
      default: 100,
    },
    ease: {
      type: String,
      default: 'sine.out',
    },
    delay: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    enter(el, done) {
      gsap.registerPlugin(ScrollTrigger)

      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: this.y,
        },
        {
          scrollTrigger: {
            trigger: el,
            once: true,
          },
          delay: this.delay,
          opacity: 1,
          y: 0,
          duration: this.duration,
          ease: this.ease,
          onComplete: done,
        },
      )
    },
  },
}
</script>
