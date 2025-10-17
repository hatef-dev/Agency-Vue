<template>
  <div class="my-container">
    <div class="flex flex-col gap-y-4">
      <h1 class="text-white text-3xl md:text-5xl lg:text-8xl font-semibold uppercase">
        {{ title }}
      </h1>
      <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div class="flex gap-x-3 items-center flex-wrap">
          <tag-button :backgroundSecondary="true" v-for="tag in tags" :key="tag">{{
            tag
          }}</tag-button>
        </div>
        <the-button class="w-full sm:w-auto" :backgroundSecondary="true">
          <template #label> Book A Call </template>
        </the-button>
      </div>
    </div>
    <div class="w-full mt-10">
      <img
        :src="image"
        :alt="title"
        class="w-full rounded-2xl h-[380px] lg:h-[600px] object-cover"
      />
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
