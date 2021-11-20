<template>
  <div class="flex flex-col min-h-screen">
    <n-nav />

    <Nuxt />

    <div class="flex-grow w-full" />

    <!-- Footer -->
    <div class="bg-white">
      <div
        class="
          max-w-screen-xl
          px-4
          py-12
          mx-auto
          overflow-hidden
          sm:px-6
          lg:px-8
        "
      >
        <nav class="flex flex-wrap justify-center -mx-5 -my-2">
          <div class="px-5 py-2">
            <nuxt-link
              to="/#services"
              class="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              Services
            </nuxt-link>
          </div>
          <div class="px-5 py-2">
            <nuxt-link
              to="/#about-me"
              class="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              About me
            </nuxt-link>
          </div>
          <div class="px-5 py-2">
            <nuxt-link
              to="/#portfolio"
              class="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              Portfolio
            </nuxt-link>
          </div>
          <div class="px-5 py-2">
            <nuxt-link
              :to="{ name: 'blog' }"
              class="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              Blog
            </nuxt-link>
          </div>
          <div class="px-5 py-2">
            <nuxt-link
              to="/#contact"
              class="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              Get in touch
            </nuxt-link>
          </div>
        </nav>
        <div class="flex justify-center mt-8">
          <a
            href="https://www.linkedin.com/in/naledihollbruegge/"
            target="_blank"
            class="text-gray-400 hover:text-gray-500"
          >
            <span class="sr-only">LinkedIn</span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://public.tableau.com/profile/naledi.hollbruegge"
            target="_blank"
            class="ml-6 text-gray-400 hover:text-gray-500"
          >
            <span class="sr-only">Tableau</span>
            <img src="/tableau.png" class="w-6 h-6 opacity-50 hover:" />
          </a>
          <a
            href="https://twitter.com/lediholly"
            target="_blank"
            class="ml-6 text-gray-400 hover:text-gray-500"
          >
            <span class="sr-only">Twitter</span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
