<template>
  <div class="my-container">
    <div class="flex justify-center items-center">
      <transition-animation>
        <h1
          class="uppercase text-white font-semibold w-full text-2xl lg:text-8xl lg:w-6xl text-center"
        >
          Connect with Our Experts Today
        </h1>
      </transition-animation>
    </div>
    <transition-animation>
      <div
        class="bg-[#0C0C0C] border border-white/10 rounded-2xl justify-center items-center w-full p-5 lg:p-16 flex gap-x-10 mt-16"
      >
        <img src="/Contact.webp" alt="" class="hidden lg:block w-[456px] h-auto rounded-md" />
        <div class="w-full">
          <vee-form @submit="register" :validation-schema="schema" class="flex flex-col gap-y-5">
            <div
              class="grid grid-cols-1 lg:grid-cols-2 gap-x-2 gap-y-4 lg:gap-x-10 justify-between w-full"
            >
              <div class="flex flex-col gap-y-2">
                <label for="name" class="text-white text-base">Name</label>
                <vee-field name="name" v-slot="{ field, errors }">
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    class="w-full placeholder:text-white/40 py-4 px-4 bg-[#1D1C1D] rounded-md p-2 text-white border-0 focus:outline-0 focus:border-none"
                    v-bind="field"
                  />
                  <div class="text-red-500" v-for="error in errors" :key="error">
                    {{ error }}
                  </div>
                </vee-field>
              </div>
              <div class="flex flex-col gap-y-2">
                <label for="Number" class="text-white text-base">Number</label>
                <vee-field
                  type="number"
                  name="Number"
                  id="Number"
                  placeholder="Number"
                  class="w-full placeholder:text-white/40 py-4 px-4 bg-[#1D1C1D] rounded-md p-2 text-white border-0 focus:outline-0 focus:border-none"
                />
                <vee-error-message name="Number" class="text-red-500" />
              </div>
            </div>

            <div class="flex flex-col gap-y-2">
              <label for="email" class="text-white text-base">Email</label>
              <vee-field
                type="Email"
                name="email"
                id="email"
                required
                placeholder="Email"
                class="w-full placeholder:text-white/40 py-4 px-4 bg-[#1D1C1D] rounded-md p-2 text-white border-0 focus:outline-0 focus:border-none"
              />
              <vee-error-message name="email" class="text-red-500" />
            </div>
            <div class="flex flex-col gap-y-2">
              <label for="Message" class="text-white text-base">Message</label>
              <vee-field
                as="textarea"
                type="Message"
                name="Message"
                id="Message"
                required
                placeholder="Message"
                cols="30"
                rows="6"
                class="w-full resize-none placeholder:text-white/40 py-4 px-4 bg-[#1D1C1D] rounded-md p-2 text-white border-0 focus:outline-0 focus:border-none"
              />
            </div>
            <the-button :backgroundSecondary="true"></the-button>
          </vee-form>
        </div>
      </div>
    </transition-animation>
  </div>
</template>

<script>
export default {
  name: 'ContactPageHeader',
  data() {
    return {
      schema: {
        name: 'required|min:3|max:30|alpha_spaces',
        Number: 'required|numeric',
        email: 'required|email|min:3|max:30',
      },
    }
  },
  methods: {
    register(value) {
      console.log(value)
    },
  },
}
</script>
