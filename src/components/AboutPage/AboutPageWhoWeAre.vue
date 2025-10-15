<template>
  <div class="my-container">
    <div class="grid grid-cols-1 text-white lg:grid-cols-2 gap-8">
      <transition-animation start="top 40%">
        <img src="/whoWeAre.webp" alt="" class="w-full h-full rounded-2xl" />
      </transition-animation>
      <div class="flex flex-col gap-y-10">
        <transition-animation start="top 60%" :delay="0.25">
          <div class="flex flex-col gap-y-4">
            <h1 class="text-white uppercase text-4xl lg:text-7xl font-semibold">Who We Are</h1>
            <p class="text-white/60 text-lg">
              At [Your Agency Name], we are a dynamic team of digital innovators, and creatives who
              are passionate about driving growth for businesses through innovative digital
              solutions. From web development.
            </p>
          </div>
        </transition-animation>
        <transition-animation start="top 60%" :delay="0.5">
          <div class="flex flex-col gap-y-4 py-10 border-b border-white/20">
            <h1 class="text-white uppercase text-2xl lg:text-4xl font-semibold">Our Mission</h1>
            <p class="text-white/60 text-lg">
              We are a dynamic team of digital innovators, and creatives who are passionate about
              driving growth for businesses through innovative digital solutions. From web
              development.
            </p>
          </div>
        </transition-animation>
        <transition-animation start="top 60%" :delay="0.75">
          <div class="flex flex-col gap-y-4 py-2">
            <h1 class="text-white uppercase text-2xl lg:text-4xl font-semibold">Our Values</h1>
            <p class="text-white/60 text-lg">
              We are a dynamic team of digital innovators, and creatives who are passionate about
              driving growth for businesses through innovative digital solutions. From web
              development.
            </p>
          </div>
        </transition-animation>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AboutPageWhoWeAre',
}
</script>
