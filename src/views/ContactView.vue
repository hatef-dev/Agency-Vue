<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <the-header></the-header>
    <div class="my-container py-20">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl lg:text-6xl font-bold mb-8">Contact Us</h1>
        <p class="text-xl text-gray-300 mb-12">
          Get in touch with us to discuss your project and bring your ideas to life.
        </p>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div>
            <h2 class="text-2xl font-semibold mb-6">Send us a message</h2>
            <form class="space-y-6">
              <div>
                <label class="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  rows="6"
                  class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button 
                type="submit"
                class="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <!-- Contact Info -->
          <div>
            <h2 class="text-2xl font-semibold mb-6">Get in touch</h2>
            <div class="space-y-6">
              <div>
                <h3 class="text-lg font-medium mb-2">Email</h3>
                <p class="text-gray-300">hello@agency.com</p>
              </div>
              <div>
                <h3 class="text-lg font-medium mb-2">Phone</h3>
                <p class="text-gray-300">+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 class="text-lg font-medium mb-2">Address</h3>
                <p class="text-gray-300">
                  123 Digital Street<br>
                  Tech City, TC 12345
                </p>
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
  name: 'ContactView',
  components: {
    TheHeader
  }
}
</script>
