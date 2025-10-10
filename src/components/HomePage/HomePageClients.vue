<template>
  <div class="my-container flex flex-col gap-y-4 lg:gap-y-10">
    <!-- Dot-->
    <transition-animation>
      <div class="flex items-center gap-x-2">
        <!-- dot --><span class="w-2 h-2 bg-red-500 rounded-full"></span
        ><span class="text-white">Clients</span>
      </div>
    </transition-animation>
    <transition-animation>
      <h1 class="uppercase text-white text-4xl lg:text-7xl font-semibold">Our Clients</h1>
    </transition-animation>
    <div>
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <transition-animation :delay="i * 0.05" v-for="i in [1, 2, 3, 4, 5, 6, 7, 8]" :key="i">
          <div
            class="h-[80px] lg:h-[192px] flex justify-center items-center bg-[#1e1e1e] text-white rounded-md"
          >
            <h3>Client {{ i }}</h3>
          </div>
        </transition-animation>
      </div>
    </div>
  </div>
</template>
