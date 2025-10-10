<template>
  <div class="my-container">
    <div class="grid grid-cols-2">
      <div class="col-span-1">
        <!--Dot-->
        <transition-animation>
          <div class="flex items-center gap-x-2">
            <span class="w-2 h-2 bg-red-500 rounded-full"></span>
            <span class="text-white">Testimonials</span>
          </div>
        </transition-animation>
      </div>
      <transition-animation class="col-span-1">
        <h1 class="text-white text-7xl font-semibold">WHAT PEOPLE SAY ABOUT US</h1>
      </transition-animation>
    </div>

    <div class="text-white">
      <swiper
        class="border-y border-white/20"
        :slides-per-view="1"
        :space-between="50"
        :modules="[Navigation]"
        navigation
      >
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import '@/assets/swiperComment.css'

export default {
  name: 'PepoleComments',
  components: { Swiper, SwiperSlide },
  data() {
    return {
      Navigation,
    }
  },
}
</script>
