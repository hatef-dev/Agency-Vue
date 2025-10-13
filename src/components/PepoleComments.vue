<template>
  <div class="my-container">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-4">
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
        <h1 class="text-white text-2xl lg:text-7xl font-semibold">WHAT PEOPLE SAY ABOUT US</h1>
      </transition-animation>
    </div>

    <div class="text-white mt-10">
      <swiper
        class="border-y border-white/20"
        :slides-per-view="1.5"
        :space-between="50"
        :centered-slides="false"
        :loop="true"
        :breakpoints="{
          640: { slidesPerView: 1.2, spaceBetween: 20 },
          768: { slidesPerView: 1.5, spaceBetween: 30 },
          1024: { slidesPerView: 1.7, spaceBetween: 50 },
        }"
        :modules="[Navigation]"
        navigation
      >
        <swiper-slide v-for="comment in comments" :key="comment.id">
          <div class="flex flex-col gap-y-10">
            <p class="text-5xl font-medium">"{{ comment.comment }}"</p>

            <div class="flex items-center gap-x-4">
              <img :src="comment.image" class="w-12 h-12 rounded-full" />
              <div class="flex flex-col">
                <span class="text-sm font-medium">{{ comment.name }}</span>
                <span class="text-xs text-gray-400">{{ comment.work }}</span>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import useCommentsStore from '@/stores/comments'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import '@/assets/swiperComment.css'

export default {
  name: 'PepoleComments',
  computed: {
    ...mapState(useCommentsStore, ['comments']),
  },
  components: { Swiper, SwiperSlide },
  data() {
    return {
      Navigation,
    }
  },
}
</script>
