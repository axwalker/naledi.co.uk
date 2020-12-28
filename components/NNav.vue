<template>
  <div class="relative z-30 bg-white">
    <div class="px-4 mx-auto max-w-7xl sm:px-6">
      <div
        class="flex items-center justify-between py-6 border-b-2 border-gray-100 md:justify-start md:space-x-10"
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <nuxt-link to="/">
            <span class="sr-only">Naledi</span>
            <span class="text-5xl font-black text-primary-600"> n </span>
          </nuxt-link>
        </div>

        <div class="-my-2 -mr-2 md:hidden">
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            @click="isMobileMenuOpen = true"
          >
            <span class="sr-only">Open menu</span>
            <!-- Heroicon name: menu -->
            <svg
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <nav class="hidden space-x-10 md:flex">
          <nuxt-link
            to="/#services"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Services
          </nuxt-link>
          <nuxt-link
            to="/#about-me"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            About me
          </nuxt-link>
          <nuxt-link
            to="/#portfolio"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Portfolio
          </nuxt-link>
          <nuxt-link
            :to="{ name: 'blog' }"
            link-active-class="font-semibold text-primary-600"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Blog
          </nuxt-link>
        </nav>

        <div class="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
          <nuxt-link
            to="/#contact"
            class="text-base font-medium text-primary-700 whitespace-nowrap hover:text-primary-900"
          >
            Get in touch
          </nuxt-link>
        </div>
      </div>
    </div>

    <!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  -->
    <div
      v-show="isMobileMenuOpen"
      x-transition:enter="duration-150 ease-out"
      x-transition:enter-start="opacity-0 scale-95"
      x-transition:enter-end="opacity-100 scale-100"
      x-transition:leave="duration-100 ease-in"
      x-transition:leave-start="opacity-100 scale-100"
      x-transition:leave-end="opacity-0 scale-95"
      class="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
    >
      <div class="rounded-lg shadow-md">
        <div class="overflow-hidden bg-white rounded-lg shadow-xs">
          <div class="flex items-center justify-between px-5 pt-4">
            <div>
              <span class="text-5xl font-black text-primary-600"> n </span>
            </div>
            <div class="-mr-2">
              <button
                type="button"
                class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                @click="isMobileMenuOpen = false"
              >
                <svg
                  class="w-6 h-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="px-2 pt-2 pb-3">
            <a
              href="/#services"
              class="block px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
            >
              Services
            </a>
            <a
              href="/#about-me"
              class="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
            >
              About me
            </a>
            <a
              href="/#portfolio"
              class="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
            >
              Portfolio
            </a>
            <nuxt-link
              :to="{ name: 'blog' }"
              class="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
            >
              Blog
            </nuxt-link>
          </div>
          <div>
            <a
              href="/#contact"
              class="block w-full px-5 py-3 font-medium text-center transition duration-150 ease-in-out text-primary-600 bg-gray-50 hover:bg-gray-100 hover:text-primary-700 focus:outline-none focus:bg-gray-100 focus:text-primary-700"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMobileMenuOpen: false,
    }
  },
}
</script>

<style>
/* a.nuxt-link-active {
  @apply text-primary-500 font-bold;
} */
</style>
