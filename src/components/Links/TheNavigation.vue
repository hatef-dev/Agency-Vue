<template>
  <nav>
    <ul :class="stacked ? 'flex flex-col items-start gap-4' : 'flex items-center gap-8'">
      <router-link
        v-for="link in links"
        :to="link.path"
        :key="link.path"
        class="flex items-center gap-4 group font-light"
      >
        <span
          class="w-1.5 h-1.5 bg-white rounded-full group-hover:bg-red-500 group-hover:scale-200 transition-all duration-300"
        ></span>
        <span class="group-hover:text-red-500 transition-all duration-300">{{ link.label }}</span>
      </router-link>
    </ul>
  </nav>
</template>

<script>
import { mapState } from 'pinia'
import useNavigationStore from '@/stores/navigations'
export default {
  name: 'TheNavigation',
  props: {
    stacked: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState(useNavigationStore, ['links']),
  },
}
</script>
