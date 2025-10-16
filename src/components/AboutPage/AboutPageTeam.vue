<template>
  <div class="my-container">
    <div class="flex flex-col gap-y-5 justify-center items-center">
      <h1 class="text-white uppercase text-2xl lg:text-7xl font-semibold text-center">
        meet our team
      </h1>
      <p class="text-white/60 text-lg text-center w-full lg:w-xl">
        See how Ontask integrates into your daily operations,enhancing team productivity and project
        transparency.
      </p>
      <div class="grid lg:grid-cols-4 gap-y-6 lg:gap-4 grid-cols-1">
        <transition-animation :delay="person.id * 0.5" v-for="person in Team" :key="person.id">
          <div class="flex flex-col gap-y-2">
            <img
              :src="person.image"
              alt="Team"
              class="w-full h-auto rounded-2xl transition-all duration-500 ease-in-out lg:grayscale-100 hover:grayscale-0"
            />
            <div class="flex justify-between items-center">
              <div class="flex flex-col gap-y-1">
                <h1 class="text-white text-xl font-semibold">{{ person.name }}</h1>
                <span class="text-white">{{ person.work }}</span>
              </div>
              <div class="flex gap-x-3">
                <a
                  :href="person.instagram"
                  target="_blank"
                  class="w-10 h-10 p-2 text-white flex justify-center items-center"
                >
                  <svg
                    enable-background="new 0 0 32 32"
                    height="32px"
                    class="w-8 h-8"
                    id="Layer_1"
                    version="1.0"
                    viewBox="0 0 32 32"
                    width="32px"
                    xml:space="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <g>
                      <rect fill="currentColor" height="23" width="7" y="9" />
                      <path
                        d="M24.003,9C20,9,18.89,10.312,18,12V9h-7v23h7V19c0-2,0-4,3.5-4s3.5,2,3.5,4v13h7V19C32,13,31,9,24.003,9z"
                        fill="currentColor"
                      />
                      <circle cx="3.5" cy="3.5" fill="currentColor" r="3.5" />
                    </g>
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                  </svg>
                </a>
                <a
                  :href="person.instagram"
                  target="_blank"
                  class="w-10 h-10 p-2 text-white flex justify-center items-center"
                >
                  <svg
                    version="1.1"
                    fill="currentColor"
                    class="w-8 h-8"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 56.7 56.7"
                    enable-background="new 0 0 56.7 56.7"
                    xml:space="preserve"
                  >
                    <g>
                      <path
                        d="M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7   c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z"
                      />
                      <circle cx="41.5" cy="16.4" r="2.9" />
                      <path
                        d="M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9   h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.6,39.9c0,3.1-1.1,5.6-2.9,7.3   s-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6   c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9L48.6,39.9z"
                      />
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </transition-animation>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import useTeamStore from '@/stores/Team'
import TransitionAnimation from '../Ui/TransitionAnimation.vue'

export default {
  components: { TransitionAnimation },
  name: 'AboutPageTeam',
  computed: {
    ...mapState(useTeamStore, ['Team']),
  },
}
</script>
