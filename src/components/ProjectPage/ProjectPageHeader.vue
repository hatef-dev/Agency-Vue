<template>
  <div class="my-container">
    <div class="flex flex-col gap-y-4">
      <h1 class="text-white text-3xl lg:text-8xl font-semibold uppercase">{{ title }}</h1>
      <div class="flex justify-between items-center">
        <div class="flex gap-x-3 items-center">
          <tag-button :backgroundSecondary="true" v-for="tag in tags" :key="tag">{{
            tag
          }}</tag-button>
        </div>
        <the-button :backgroundSecondary="true">
          <template #label> Book A Call </template>
        </the-button>
      </div>
    </div>
    <div class="w-full mt-10">
      <img :src="image" class="w-full rounded-2xl h-[600px] object-cover" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectPageHeader',
  props: {
    title: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
}
</script>
