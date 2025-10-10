<template>
  <div>
    <router-link
      :to="path"
      class="group relative inline-flex items-center overflow-hidden rounded-md p-4 px-6 text-black transition-all duration-300 shadow-sm"
      :class="{ 'bg-white': !backgroundSecondary, 'bg-red-500': backgroundSecondary }"
    >
      <!-- dots -->
      <span class="flex items-center relative mr-2">
        <span
          class="w-2 h-2 rounded-full transform transition-transform duration-500 group-hover:scale-[30]"
          :class="{ 'bg-red-500': !backgroundSecondary, 'bg-white': backgroundSecondary }"
        ></span>
        <span
          class="w-2 h-2 absolute rounded-full z-10 transition-all duration-500"
          :class="{
            'bg-black group-hover:bg-white': !backgroundSecondary,
            'bg-white group-hover:bg-red-500': backgroundSecondary,
          }"
        ></span>
      </span>

      <!-- sliding text wrapper (clipped) -->
      <span class="relative overflow-hidden h-5 leading-5">
        <!-- visible text -->
        <span
          class="block transform transition-transform duration-300 translate-y-0 group-hover:-translate-y-[120%]"
          :class="{
            'text-black group-hover:text-white': !backgroundSecondary,
            'text-white group-hover:text-black': backgroundSecondary,
          }"
        >
          <slot name="label">Contact Us</slot>
        </span>

        <!-- hidden text (slides up into view on hover) -->
        <span
          class="absolute left-0 z-20 top-0 block transform transition-transform duration-300 translate-y-[120%] group-hover:translate-y-0"
          :class="{
            'text-black group-hover:text-white': !backgroundSecondary,
            'text-white group-hover:text-black': backgroundSecondary,
          }"
        >
          <slot name="label">Contact Us</slot>
        </span>
      </span>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'TheButton',
  props: {
    backgroundSecondary: {
      type: Boolean,
      default: false,
      required: false,
    },
    path: {
      type: String,
      default: '/',
      required: true,
    },
  },
}
</script>
