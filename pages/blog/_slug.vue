<template>
  <div class="relative">
    <div class="absolute inset-x-0 top-0 h-64 hero-dots" />
    <div
      :class="{
        [`bg-${colours[0]}-500`]: colours.length == 1,
        [`from-${colours[0]}-500 to-${colours[1]}-500`]: colours.length == 2,
        [`from-${colours[0]}-500 via-${colours[1]}-500 to-${colours[2]}-500`]:
          colours.length == 3,
      }"
      class="absolute inset-x-0 top-0 h-56 opacity-20 bg-gradient-to-r"
    />
    <div
      class="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-transparent via-white to-white"
    />

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
              v-for="(category, i) in page.categories || []"
              :key="category"
              class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mr-2 border"
              :class="`bg-${colours[i]}-100 text-${colours[i]}-800 border-${colours[i]}-300`"
            >
              <n-icon :icon="icons[i]" class="inline-flex w-3 h-3 mr-1" />
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
            </div>
          </div>
          <div class="prose text-gray-700 max-w-none">
            <div>
              <nuxt-content :document="page" />
            </div>
          </div>
        </div>

        <div class="flex items-center justify-start mt-20 mb-6 mr-6">
          <span class="mr-6 text-gray-400">Share post:</span>

          <a
            :href="twitterShareUrl"
            target="_blank"
            class="mt-px text-gray-400 cursor-pointer hover:text-primary-500"
          >
            <span class="sr-only">Twitter </span>
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
              />
            </svg>
          </a>
          <a
            :href="linkedInShareUrl"
            target="_blank"
            class="mb-px ml-4 text-gray-400 cursor-pointer hover:text-primary-500"
          >
            <span class="sr-only">LinkedIn </span>
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>

        <div class="pt-6 border-t-2 border-gray-100">
          <h2
            class="mt-3 text-xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-2xl"
          >
            Related posts
          </h2>

          <div class="flex flex-col sm:flex-row sm:space-x-6">
            <nuxt-link
              v-for="blog in relatedBlogs.slice(0, 2)"
              :key="blog.slug"
              :to="{ name: 'blog-slug', params: { slug: blog.slug } }"
              class="block w-full pt-2 mt-4 sm:w-1/2"
            >
              <blog-summary :blog="blog" />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { format } from 'date-fns'
import BlogSummary from './-BlogSummary.vue'
import { colours } from './-config'

export default {
  components: {
    BlogSummary,
  },

  async asyncData({ $content, params, error }) {
    const slug = params.slug || 'index'
    const page = await $content(`blog/${slug}`)
      .fetch()
      // eslint-disable-next-line handle-callback-err
      .catch((err) => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    const blogs = await $content('blog')
      .without(['body'])
      .sortBy('date', 'desc')
      .fetch()
      // eslint-disable-next-line handle-callback-err
      .catch((err) => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    return {
      page,
      blogs,
    }
  },

  data() {
    return {
      baseUrl:
        process.env.context === 'production'
          ? process.env.siteUrl
          : process.env.deployPreviewUrl,
    }
  },

  computed: {
    colours() {
      return this.page.categories.map((cat) => colours[cat].colour)
    },
    icons() {
      return this.page.categories.map((cat) => colours[cat].icon)
    },

    relatedBlogs() {
      const related = []

      for (const category of this.page.categories) {
        for (const blog of this.blogs) {
          if (blog.slug === this.page.slug) continue

          if (blog.categories.includes(category)) {
            related.push(blog)
            continue
          }
        }
      }

      return related
    },

    twitterShareUrl() {
      const text =
        this.page.title +
        ` - Naledi Hollbruegge @ https://naledi.co.uk/blog/${this.page.slug}`
      return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`
    },

    linkedInShareUrl() {
      let url = `https://naledi.co.uk/blog/${this.page.slug}`
      url = encodeURIComponent(url)
      return `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
    },
  },

  methods: {
    dateFormat: format,
  },

  head() {
    return {
      title: this.page.title,
      meta: [
        {
          hid: 'author',
          name: 'author',
          content: 'Naledi Hollbruegge',
        },
        {
          hid: 'description',
          name: 'description',
          content: this.page.summary,
        },
        {
          hid: 'article:published_time',
          name: 'article:published_time',
          content: this.page.date,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.page.title,
        },
        // {
        //   hid: 'og:image',
        //   name: 'og:image',
        //   content: this.baseUrl + this.page.coverImage,
        // },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.page.summary,
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: this.baseUrl + '/blog/' + this.page.slug,
        },
        {
          hid: 'og:publish_date',
          name: 'og:publishe_date',
          content: this.page.date,
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.page.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.page.summary,
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@lediholly',
        },
        {
          hid: 'twitter:creator',
          name: 'twitter:creator',
          content: '@lediholly',
        },
        // {
        //   hid: 'twitter:image',
        //   name: 'twitter:image',
        //   content: this.baseUrl + this.page.twitterImage,
        // },
      ],
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
ol[start='2'] {
  counter-reset: lis 1;
}
ol[start='3'] {
  counter-reset: lis 2;
}
ol[start='4'] {
  counter-reset: lis 3;
}
ol[start='5'] {
  counter-reset: lis 4;
}
ol[start='6'] {
  counter-reset: lis 5;
}
ol[start='7'] {
  counter-reset: lis 6;
}
ol[start='8'] {
  counter-reset: lis 7;
}
ol[start='9'] {
  counter-reset: lis 8;
}
ol[start='10'] {
  counter-reset: lis 9;
}
ol[start='11'] {
  counter-reset: lis 10;
}
ol[start='12'] {
  counter-reset: lis 11;
}
ol[start='13'] {
  counter-reset: lis 12;
}
ol[start='14'] {
  counter-reset: lis 13;
}
ol[start='15'] {
  counter-reset: lis 14;
}
ol[start='16'] {
  counter-reset: lis 15;
}
ol[start='17'] {
  counter-reset: lis 16;
}
ol[start='18'] {
  counter-reset: lis 17;
}
ol[start='19'] {
  counter-reset: lis 18;
}
</style>
