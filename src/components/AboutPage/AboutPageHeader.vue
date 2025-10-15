<template>
  <div class="my-container">
    <div class="grid grid-cols-1 text-white lg:grid-cols-2 gap-y-8">
      <transition-animation>
        <h1 class="text-6xl lg:text-8xl uppercase font-semibold">About Our Company</h1>
      </transition-animation>
      <div class="flex flex-col gap-y-8">
        <transition-animation>
          <p class="text-xl text-white/70 font-medium">
            We are a dynamic team of digital innovators, strategists, and creatives who are
            passionate about driving growth for businesses through innovative digital solutions. we
            blend strategy, creativity.
          </p>
        </transition-animation>
        <transition-animation :delay="0.5">
          <the-button :backgroundSecondary="true" path="/contact">
            <template #label> Book a Call </template>
          </the-button>
        </transition-animation>
      </div>
    </div>
  </div>
</template>
<script>
import TransitionAnimation from '../Ui/TransitionAnimation.vue'
export default {
  components: { TransitionAnimation },
  name: 'AboutPageHeader',
}
</script>
