<template>
  <div>
    <div
      class="relative px-4 pt-16 pb-12 overflow-hidden sm:px-6 lg:pt-16 lg:px-8"
    >
      <div class="relative mx-auto mt-0 sm:px-6 lg:px-8 sm:max-w-4xl">
        <nuxt-link
          :to="{ name: 'blog' }"
          class="block mb-4 text-sm text-primary-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="inline-flex w-4 h-4 mr-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          back to all blog posts
        </nuxt-link>

        <div class="flex flex-col w-full">
          <div class="mt-4 mb-4 text-lg">
            <span
              v-for="category in page.categories || []"
              :key="category"
              class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-primary-100 text-primary-800 mr-2"
            >
              {{ category }}
            </span>

            <h1
              class="mt-2 mb-2 text-3xl font-extrabold leading-8 tracking-tight text-left text-gray-900 sm:text-5xl"
            >
              {{ page.title }}
            </h1>

            <div class="flex justify-between text-base text-gray-400">
              <time :datetime="page.date">
                {{ dateFormat(new Date(page.date), 'do MMM, yyyy') }}
              </time>

              <!-- <div class="flex items-start justify-end mr-6">
                <a
                  :href="twitterShareUrl"
                  target="_blank"
                  class="mt-px text-gray-400 hover:text-primary-500"
                >
                  <span class="sr-only">Twitter </span>
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                    />
                  </svg>
                </a>
                <a
                  :href="linkedInShareUrl"
                  target="_blank"
                  class="ml-4 text-gray-400 hover:text-primary-500"
                >
                  <span class="sr-only">LinkedIn </span>
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fill-rule="evenodd"
                      d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div> -->
            </div>
          </div>
          <div class="prose text-gray-700 max-w-none">
            <div>
              <nuxt-content :document="page" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { format } from 'date-fns'

export default {
  async asyncData({ $content, params, error }) {
    const slug = params.slug || 'index'
    const page = await $content(`blogs/${slug}`)
      .fetch()
      // eslint-disable-next-line handle-callback-err
      .catch((err) => {
        error({ statusCode: 404, message: 'Page not found' })
      })
    return {
      page,
    }
  },

  data() {
    return {
      //   baseUrl:
      //     process.env.context === 'production' ? process.env.siteUrl : process.env.deployPreviewUrl,
    }
  },

  methods: {
    dateFormat: format,
  },

  head() {
    return {
      title: this.page.title,
    }
  },
}
</script>

<style>
.prose a {
  @apply text-primary-500;
}
.prose code {
  @apply text-sm !important;
}
.prose p img {
  @apply mx-auto block;
}
.prose .caption {
  @apply pb-8 text-sm text-center;
}
</style>
