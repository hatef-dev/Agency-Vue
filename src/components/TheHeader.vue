<template>
  <header ref="mainHeader" class="py-7 bg-transparent fixed top-0 z-20 w-full">
    <div class="my-container">
      <div class="flex justify-between items-center text-white relative z-50">
        <div>
          <img
            src="https://cdn.prod.website-files.com/67cd55ad9df25dbc551e8ea4/67ce84ef107013333a321e8f_Footer%20Icon.svg"
            loading="lazy"
            alt="Nav Icon"
            class="nav-icon"
          />
        </div>

        <!-- Desktop nav -->
        <div class="hidden lg:block">
          <TheNavigation />
        </div>

        <!-- CTA (desktop only) -->
        <the-button class="hidden lg:block">
          <template #label>Contact Us</template>
        </the-button>

        <!-- Mobile: hamburger -->
        <div class="lg:hidden">
          <div class="hamburger">
            <a
              class="main-nav-toggle"
              :class="{ 'active-menu': isActive }"
              @click.prevent="toggleMenu"
            >
              <i></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile nav drawer -->
    <transition @before-enter="beforeEnter" @enter="enter" @leave="leave">
      <div
        v-if="menuOpen"
        class="lg:hidden fixed w-screen h-screen border-t z-30 border-white/10 bg-[#191919] text-white overflow-hidden"
      >
        <div class="my-container py-4 h-full relative">
          <TheNavigation :stacked="true" />
          <div class="mt-4">
            <the-button>
              <template #label>Contact Us</template>
            </the-button>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
import { gsap } from 'gsap'
import TheNavigation from '@/components/Links/TheNavigation.vue'

export default {
  components: {
    TheNavigation,
  },
  name: 'TheHeader',
  data() {
    return {
      menuOpen: false,
      isActive: false,
    }
  },
  mounted() {
    const header = this.$refs.mainHeader

    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('bg-[#191919]')
        header.classList.remove('bg-transparent')
      } else {
        header.classList.remove('bg-[#191919]')
        header.classList.add('bg-transparent')
      }
    })
  },
  methods: {
    beforeEnter(el) {
      gsap.set(el, { height: 0, y: 24 })
    },
    enter(el, done) {
      gsap.to(el, {
        height: '100vh',
        duration: 0.5,
        ease: 'power1.inOut',
        onComplete: done,
      })
    },
    leave(el, done) {
      gsap.to(el, {
        height: 0,
        duration: 0.5,
        ease: 'power1.inOut',
        onComplete: () => {
          this.menuOpen = false
          done()
        },
      })
    },
    toggleMenu(e) {
      e.preventDefault()
      this.menuOpen = !this.menuOpen
      this.$refs.mainHeader.classList.toggle('active-menu')
      this.isActive = !this.isActive
    },
  },
}
</script>

<style scoped>
.hamburger {
  height: 26px;
}

.hamburger a.main-nav-toggle {
  display: block;
  width: 28px;
  height: 16px;
  /* left: 70px; */
  position: relative;
  /* top: 25px; */
}

.hamburger a.main-nav-toggle:after,
.hamburger a.main-nav-toggle:before {
  content: '';
  position: absolute;
  /* top: 0; */
  height: 0;
  border-bottom: 4px solid #bbb;
  width: 100%;
  /* left: 0;
  right: 0; */
  transition: all ease-out 0.3s;
}

.hamburger a.main-nav-toggle:after {
  top: 100%;
}

.hamburger a.main-nav-toggle i {
  display: block;
  text-indent: 100%;
  overflow: hidden;
  white-space: nowrap;
  height: 4px;
  background-color: #bbb;
  width: 100%;
  position: absolute;
  top: 50%;
  transition: all ease-out 0.1s;
}

.hamburger a.main-nav-toggle.active-menu:after {
  transform: rotate(-45deg);
  transform-origin: center;
  top: 50%;
}

.hamburger a.main-nav-toggle.active-menu:before {
  transform: rotate(45deg);
  transform-origin: center;
  top: 50%;
}

.hamburger a.main-nav-toggle.active-menu i {
  opacity: 0;
}
</style>
