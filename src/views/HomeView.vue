<template>
  <the-header></the-header>
  <div class="flex flex-col gap-y-10 lg:gap-y-36">
    <home-page-header> </home-page-header>
    <home-page-about-us></home-page-about-us>
    <home-page-services></home-page-services>
    <home-page-projects></home-page-projects>
    <home-page-clients></home-page-clients>
    <pepole-comments></pepole-comments>
  </div>
</template>

<script>
import HomePageHeader from '@/components/HomePage/HomePageHeader.vue'
import HomePageAboutUs from '@/components/HomePage/HomePageAboutUs.vue'
import HomePageServices from '@/components/HomePage/HomePageServices.vue'
import HomePageProjects from '@/components/HomePage/HomePageProjects.vue'
import HomePageClients from '@/components/HomePage/HomePageClients.vue'
import PepoleComments from '@/components/PepoleComments.vue'
export default {
  name: 'HomeView',
  components: {
    HomePageHeader,
    HomePageAboutUs,
    HomePageServices,
    HomePageProjects,
    HomePageClients,
    PepoleComments,
  },
}
</script>
