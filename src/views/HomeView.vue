<template>
  <div class="flex flex-col gap-y-10 lg:gap-y-40">
    <home-page-header> </home-page-header>
    <home-page-about-us></home-page-about-us>
    <home-page-services></home-page-services>
  </div>
  <the-header></the-header>
</template>

<script>
import HomePageHeader from '@/components/HomePage/HomePageHeader.vue'
import HomePageAboutUs from '@/components/HomePage/HomePageAboutUs.vue'
import HomePageServices from '@/components/HomePage/HomePageServices.vue'
export default {
  name: 'HomeView',
  components: {
    HomePageHeader,
    HomePageAboutUs,
    HomePageServices,
  },
}
</script>
