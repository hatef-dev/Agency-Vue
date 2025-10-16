<template>
  <the-header></the-header>
  <div class="mt-40 lg:mt-56">
    <contact-page-header></contact-page-header>
  </div>
</template>
<script>
import ContactPageHeader from '@/components/ContactPage/ContactPageHeader.vue'
export default {
  name: 'ContactView',
  components: {
    ContactPageHeader,
  },
}
</script>
