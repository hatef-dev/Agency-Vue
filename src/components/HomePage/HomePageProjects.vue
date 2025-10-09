<template>
  <div class="flex flex-col gap-y-4 lg:gap-y-10">
    <!-- Dot-->
    <transition-animation>
      <div class="flex items-center justify-center gap-x-2">
        <!-- dot --><span class="w-2 h-2 bg-red-500 rounded-full"></span
        ><span class="text-white">Projects</span>
      </div>
    </transition-animation>

    <transition-animation>
      <div class="flex justify-center items-center">
        <h1 class="uppercase text-white text-4xl lg:text-8xl font-semibold">Recent Projects</h1>
      </div>
    </transition-animation>

    <transition-animation>
      <div class="grid grid-cols-2 gap-x-2">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </transition-animation>
  </div>
</template>
