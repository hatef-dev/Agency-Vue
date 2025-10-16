<template>
  <div class="my-container">
    <div class="flex justify-center items-center">
      <h1
        class="uppercase text-white font-semibold w-full text-2xl lg:text-8xl lg:w-6xl text-center"
      >
        Connect with Our Experts Today
      </h1>
    </div>
    <div
      class="bg-[#0C0C0C] border border-white/10 rounded-2xl justify-center items-center w-full p-5 lg:p-16 flex gap-x-10 mt-16"
    >
      <img src="/Contact.webp" alt="" class="hidden lg:bloc w-[456px] h-auto rounded-md" />
      <div class="w-full">
        <form class="flex flex-col gap-y-5">
          <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-x-2 gap-y-4 lg:gap-x-10 justify-between w-full"
          >
            <div class="flex flex-col gap-y-2">
              <label for="name" class="text-white text-base">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                class="w-full placeholder:text-white/40 py-4 px-4 bg-[#1D1C1D] rounded-md p-2 text-white border-0 focus:outline-0 focus:border-none"
              />
            </div>
            <div class="flex flex-col gap-y-2">
              <label for="Number" class="text-white text-base">Number</label>
              <input
                type="text"
                name="Number"
                id="Number"
                placeholder="Number"
                class="w-full placeholder:text-white/40 py-4 px-4 bg-[#1D1C1D] rounded-md p-2 text-white border-0 focus:outline-0 focus:border-none"
              />
            </div>
          </div>

          <div class="flex flex-col gap-y-2">
            <label for="Email" class="text-white text-base">Email</label>
            <input
              type="Email"
              name="Email"
              id="Email"
              required
              placeholder="Email"
              class="w-full placeholder:text-white/40 py-4 px-4 bg-[#1D1C1D] rounded-md p-2 text-white border-0 focus:outline-0 focus:border-none"
            />
          </div>
          <div class="flex flex-col gap-y-2">
            <label for="Message" class="text-white text-base">Message</label>
            <textarea
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
        </form>
      </div>
    </div>
  </div>
</template>
