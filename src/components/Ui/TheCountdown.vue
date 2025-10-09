<template>
  <div class="flex items-center justify-center">
    <div
      ref="counterSection"
      class="text-4xl lg:text-9xl font-bold text-white flex items-center gap-2"
    >
      <span ref="number">0</span>
      <span>+</span>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default {
  name: 'GsapCounter',
  props: {
    target: { type: Number, default: 120 },
    duration: { type: Number, default: 2 },
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger)

    const numberEl = this.$refs.number
    const counter = { value: 0 }

    ScrollTrigger.create({
      trigger: this.$refs.counterSection,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        gsap.to(counter, {
          value: this.target,
          duration: this.duration,
          ease: 'power2.out',
          onUpdate: () => {
            numberEl.textContent = Math.floor(counter.value)
          },
        })
      },
    })
  },
}
</script>
