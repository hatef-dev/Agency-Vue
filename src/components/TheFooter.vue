<template>
  <div class="my-container flex flex-col gap-y-20 overflow-x-clip">
    <transition-animation>
      <div
        class="border rounded-2xl border-white/40 bg-[url('/footer-bg.webp')] py-24 bg-center bg-no-repeat bg-cover flex justify-center items-center overflow-hidden"
      >
        <div class="flex flex-col gap-y-6 text-white justify-center items-center">
          <h1
            class="text-white uppercase text-3xl sm:text-5xl lg:text-7xl font-semibold text-center"
          >
            Let's Work together
          </h1>
          <p class="text-center text-xs lg:text-sm">
            Transforming your digital presence with innovative web design, intuitive app design, and
            impactful.
          </p>
          <the-button path="/contact"></the-button>
        </div>
      </div>
    </transition-animation>
    <transition-animation>
      <div>
        <div class="grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-10">
          <div class="flex flex-col gap-y-12 text-white">
            <div class="shrink-0">
              <img
                src="https://cdn.prod.website-files.com/67cd55ad9df25dbc551e8ea4/67ce84ef107013333a321e8f_Footer%20Icon.svg"
                loading="lazy"
                alt="Nav Icon"
                class="nav-icon max-w-full h-auto"
              />
            </div>
            <div class="">
              <the-navigation :stacked="false"></the-navigation>
            </div>
          </div>
          <div class="flex flex-col gap-y-10 text-white">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div class="flex flex-col gap-y-3">
                <h4>Phone:</h4>
                <span class="text-base sm:text-lg lg:text-xl">+98 999 9999</span>
              </div>
              <div class="flex flex-col gap-y-3">
                <h4>Email:</h4>
                <span class="text-base sm:text-lg lg:text-xl">info@agency.com</span>
              </div>
            </div>
            <div class="flex flex-col gap-y-3">
              <h4>Address:</h4>
              <span class="text-base sm:text-lg lg:text-xl break-words"
                >123 Main Street, Anytown USA</span
              >
            </div>
          </div>
        </div>
        <footer
          class="flex flex-col sm:flex-row sm:justify-between items-center text-white my-4 gap-y-4 text-center sm:text-left"
        >
          <span>Copyright © 2023 Agency. All rights reserved.</span>
          <div class="flex gap-x-4 justify-center sm:justify-start flex-wrap">
            <a
              v-for="value in source"
              :key="value.name"
              :href="value.url"
              class="w-12 h-12 p-3.5 hover:bg-red-500 text-white transition-all duration-300 rounded-full border border-white/40 flex justify-center items-center"
              v-html="value.svg"
            >
            </a>
          </div>
        </footer>
      </div>
    </transition-animation>
  </div>
</template>
<script>
import TheNavigation from './Links/TheNavigation.vue'
import TransitionAnimation from './Ui/TransitionAnimation.vue'
export default {
  name: 'TheFooter',
  components: {
    TheNavigation,
    TransitionAnimation,
  },
  data() {
    return {
      source: [
        {
          name: 'Github',
          url: 'https://github.com/hatef-dev',
          svg: `<?xml version="1.0"?><svg enable-background="new 0 0 212.4575 186.23" class="w-8 h-8" id="github" version="1.1" viewBox="0 0 212.4575 186.23" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M151.7899,86.2343c-7.078,0.1229-14.154,0.5605-21.2324,0.7069c-12.3184,0.248-24.6404,0.5664-36.9608,0.512   c-11.1756-0.0472-22.3576-0.9728-33.5176-0.7052c-7.3164,0.1776-14.3732,2.2948-20.1308,7.584   c-9.9472,9.1368-12.5216,21-11.3144,33.8068c1.92,20.3572,9.2716,31.4492,29.1152,37.0644   c15.7928,4.4704,31.9628,5.2088,48.1992,4.9744c5.254,0,10.5096,0.1367,15.7576-0.0292   c12.7228-0.4064,25.264-2.2072,37.3576-6.3596c10.8456-3.7225,18.7988-10.6912,22.5724-22.166   c2.6736-8.1288,3.7148-16.3885,2.5544-24.8532C182.4131,103.8103,170.9151,85.91,151.7899,86.2343z M70.2139,146.2303   c-8.836,0-16-8.9551-16-20c0-11.0447,7.164-20,16-20s16,8.9553,16,20C86.2139,137.2752,79.0499,146.2303,70.2139,146.2303z    M146.2139,146.2303c-8.836,0-16-8.9551-16-20c0-11.0447,7.164-20,16-20s16,8.9553,16,20   C162.2139,137.2752,155.0499,146.2303,146.2139,146.2303z" fill="none"/><path d="M200.2451,59.1876c-2.5076-3.4493-4.3632-6.3888-3.8748-11.4396   c0.6796-7.0664-0.3536-14.3964-1.3204-21.5177C193.8311,17.246,191.5263,8.49,187.8723,0   c-9.0332,1.9356-17.9808,3.49-25.9632,8.0976c-8.4648,4.8908-16.6952,10.2148-25.08,15.25   c-0.9532,0.5704-2.3124,0.8848-3.3848,0.7032c-17.9668-3.1368-35.92-3.0196-53.8984-0.086   c-1.3632,0.2244-3.0724-0.2345-4.2948-0.9608c-4.4436-2.6604-8.6564-5.7344-13.1232-8.3516   c-11.656-6.844-23.66-12.8224-37.494-14.5901c-0.3928,0.8597-0.7188,1.4785-0.9612,2.1253   c-4.164,11.2204-6.6424,22.8436-7.4276,34.82c-0.2872,4.3516-0.6092,8.8048,0,13.0724c0.3456,2.4296-0.004,3.8788-1.3924,5.6132   C10.0011,61.742,6.2159,68.41,3.7511,75.912c-4.6972,14.2948-4.4004,28.8612-2.2756,43.4748   c1.7268,11.9744,4.7344,23.5368,11.3244,33.8728c13.1856,20.6816,32.8924,29.7736,55.5724,31.7052   c19.3084,1.6464,38.8004,1.1992,58.2128,1.2364c13.8552,0.0251,27.5704-1.4924,40.7148-6.6389   c20.3748-7.9727,33.8592-22.6035,40.2752-44.1659c3.7344-12.5448,5.2324-25.3964,4.8144-38.4981   C211.9483,83.088,208.3391,70.332,200.2451,59.1876z M181.6359,141.6228c-3.7736,11.4748-11.7268,18.4435-22.5724,22.166   c-12.0936,4.1524-24.6348,5.9532-37.3576,6.3596c-5.248,0.1659-10.5036,0.0292-15.7576,0.0292   c-16.2364,0.2344-32.4064-0.504-48.1992-4.9744c-19.8436-5.6152-27.1952-16.7072-29.1152-37.0644   c-1.2072-12.8068,1.3672-24.67,11.3144-33.8068c5.7576-5.2892,12.8144-7.4064,20.1308-7.584   c11.16-0.2676,22.342,0.658,33.5176,0.7052c12.3204,0.0544,24.6424-0.264,36.9608-0.512   c7.0784-0.1464,14.1544-0.584,21.2324-0.7069c19.1252-0.3243,30.6232,17.576,32.4004,30.5353   C185.3507,125.2343,184.3095,133.494,181.6359,141.6228z" fill="currentColor"/><ellipse cx="70.2139" cy="126.2303" fill="currentColor" rx="16" ry="20"/><ellipse cx="146.2139" cy="126.2303" fill="currentColor" rx="16" ry="20"/></g></svg>`,
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/hatef-sanati/',
          svg: `<?xml version="1.0"?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.0//EN'  'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'><svg enable-background="new 0 0 32 32" height="32px" class="w-8 h-8" id="Layer_1" version="1.0" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><rect fill="currentColor" height="23" width="7" y="9"/><path d="M24.003,9C20,9,18.89,10.312,18,12V9h-7v23h7V19c0-2,0-4,3.5-4s3.5,2,3.5,4v13h7V19C32,13,31,9,24.003,9z" fill="currentColor"/><circle cx="3.5" cy="3.5" fill="currentColor" r="3.5"/></g><g/><g/><g/><g/><g/><g/></svg>`,
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/hatef.dev/',
          svg: `<?xml version="1.0" encoding="utf-8"?>

<svg version="1.1" fill="currentColor" class="w-8 h-8" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 56.7 56.7" enable-background="new 0 0 56.7 56.7" xml:space="preserve">
<g>
	<path d="M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7   c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z"/>
	<circle cx="41.5" cy="16.4" r="2.9"/>
	<path d="M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9   h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.6,39.9c0,3.1-1.1,5.6-2.9,7.3   s-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6   c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9L48.6,39.9z"/>
</g>
</svg>
`,
        },
        {
          name: 'x',
          url: 'https://x.com/Hatef_dev21',
          svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 1200 1227" class="w-6 h-6">
      <g clip-path="url(#clip0_1_2)">
        <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
      </g>
      <defs>
        <clipPath id="clip0_1_2">
          <rect width="1200" height="1227" />
        </clipPath>
      </defs>
    </svg>`,
        },
      ],
    }
  },
}
</script>
