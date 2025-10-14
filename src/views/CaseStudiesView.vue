<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <the-header></the-header>
    <div class="my-container py-20">
      <div class="max-w-6xl mx-auto">
        <h1 class="text-4xl lg:text-6xl font-bold mb-8">Case Studies</h1>
        <p class="text-xl text-gray-300 mb-12">
          Explore our portfolio of successful projects and see how we've helped businesses transform
          their digital presence.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Case Study 1 -->
          <div
            class="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform"
          >
            <img src="/project-1.webp" alt="E-commerce Platform" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">E-commerce Platform</h3>
              <p class="text-gray-300 mb-4">
                A comprehensive online store with advanced features and seamless user experience.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="bg-red-500 text-white px-3 py-1 rounded-full text-sm">Web Design</span>
                <span class="bg-red-500 text-white px-3 py-1 rounded-full text-sm"
                  >Development</span
                >
              </div>
            </div>
          </div>

          <!-- Case Study 2 -->
          <div
            class="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform"
          >
            <img src="/project-2.webp" alt="Mobile App" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">Mobile App Design</h3>
              <p class="text-gray-300 mb-4">
                A sleek mobile application with intuitive interface and modern design principles.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="bg-red-500 text-white px-3 py-1 rounded-full text-sm">App Design</span>
                <span class="bg-red-500 text-white px-3 py-1 rounded-full text-sm">UI/UX</span>
              </div>
            </div>
          </div>

          <!-- Case Study 3 -->
          <div
            class="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform"
          >
            <img src="/seo-marketing.webp" alt="SEO Campaign" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">SEO Marketing</h3>
              <p class="text-gray-300 mb-4">
                A complete digital marketing strategy that increased organic traffic by 300%.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="bg-red-500 text-white px-3 py-1 rounded-full text-sm">SEO</span>
                <span class="bg-red-500 text-white px-3 py-1 rounded-full text-sm">Marketing</span>
              </div>
            </div>
          </div>

          <!-- Case Study 4 -->
          <div
            class="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform"
          >
            <img src="/web-design.webp" alt="Corporate Website" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">Corporate Website</h3>
              <p class="text-gray-300 mb-4">
                A professional corporate website with modern design and responsive layout.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="bg-red-500 text-white px-3 py-1 rounded-full text-sm">Web Design</span>
                <span class="bg-red-500 text-white px-3 py-1 rounded-full text-sm">Branding</span>
              </div>
            </div>
          </div>

          <!-- Case Study 5 -->
          <div
            class="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform"
          >
            <img src="/motion-design.webp" alt="Motion Graphics" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">Motion Graphics</h3>
              <p class="text-gray-300 mb-4">
                Engaging motion graphics and animations for brand storytelling.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="bg-red-500 text-white px-3 py-1 rounded-full text-sm">Animation</span>
                <span class="bg-red-500 text-white px-3 py-1 rounded-full text-sm">Motion</span>
              </div>
            </div>
          </div>

          <!-- Case Study 6 -->
          <div
            class="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform"
          >
            <img
              src="/mobile-app-design.webp"
              alt="App Development"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">App Development</h3>
              <p class="text-gray-300 mb-4">
                Full-stack mobile application development with backend integration.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="bg-red-500 text-white px-3 py-1 rounded-full text-sm"
                  >Development</span
                >
                <span class="bg-red-500 text-white px-3 py-1 rounded-full text-sm">Backend</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'

export default {
  name: 'CaseStudiesView',
  components: {
    TheHeader,
  },
}
</script>
