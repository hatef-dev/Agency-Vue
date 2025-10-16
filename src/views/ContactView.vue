<template>
  <the-header></the-header>
  <div class="mt-40 mb-20 lg:mt-56">
    <contact-page-header></contact-page-header>
  </div>
  <the-footer></the-footer>
</template>
<script>
import ContactPageHeader from '@/components/ContactPage/ContactPageHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
export default {
  name: 'ContactView',
  components: {
    ContactPageHeader,
    TheFooter,
  },
}
</script>
