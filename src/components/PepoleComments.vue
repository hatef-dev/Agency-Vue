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
      <div class="relative">
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
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
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

        <!-- Navigation buttons inside the same container -->
        <div class="flex">
          <div
            class="swiper-button-prev-next shrink-0 border px-8 w-[160px] flex justify-between items-center gap-x-5 py-4 border-white/40"
          >
            <div
              class="swiper-button-prev w-10 h-10 flex items-center justify-center cursor-pointer"
            >
              <svg
                width="24"
                height="24"
                class="-rotate-90"
                data-name="1-Arrow Up"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z"
                />
              </svg>
            </div>
            <div class="w-[0.5px] h-full bg-white/40"></div>
            <div
              class="swiper-button-next w-10 h-10 flex items-center justify-center cursor-pointer"
            >
              <svg
                width="24"
                height="24"
                class="rotate-90"
                data-name="1-Arrow Up"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
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
