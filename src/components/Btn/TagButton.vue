<template>
  <div
    class="rounded-full text-[12.5px] xl:text-lg font-medium px-3 lg:px-6 py-2 flex justify-center items-center"
    :class="[backgroundSecondary ? 'bg-[#1F1F1F] text-white' : 'bg-white text-black']"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'TagButton',
  props: {
    backgroundSecondary: {
      type: Boolean,
      default: false,
      requride: false,
    },
  },
}
</script>
