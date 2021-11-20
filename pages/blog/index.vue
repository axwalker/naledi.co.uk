<template>
  <div class="px-4 pt-4 pb-20 bg-white sm:px-6 lg:pb-28 lg:px-8">
    <div class="relative max-w-4xl mx-auto">
      <div>
        <h2
          class="mt-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-5xl sm:leading-10"
        >
          Blog
        </h2>
        <div class="mt-8">
          <div class="flex flex-col justify-end md:items-center md:flex-row">
            <!-- <span
              class="inline-flex items-center px-4 py-1 border rounded-3xl border-primary-800"
            >
              <n-icon
                icon="search"
                class="inline-flex w-4 h-4 mr-1.5 text-primary-800"
              />
              <input
                v-model="search"
                type="text"
                placholder="search..."
                class="text-sm text-gray-800 outline-none"
              />
            </span> -->

            <nav class="flex flex-wrap justify-end sm:p-1">
              <nuxt-link
                v-for="category in categories"
                :key="category"
                :to="{
                  name: 'blog',
                  query: {
                    ...$route.query,
                    category:
                      category === $route.query.category ? undefined : category,
                  },
                }"
                class="my-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mr-2 border transition transform hover:shadow-md hover:-translate-x-px hover:-translate-y-px"
                :class="{
                  [`bg-${colours[category].colour}-100 text-${colours[category].colour}-800 border-${colours[category].colour}-300`]:
                    !$route.query.category ||
                    $route.query.category === category,
                  'text-gray-800 bg-gray-100':
                    $route.query.category && $route.query.category !== category,
                }"
              >
                <n-icon
                  :icon="colours[category].icon"
                  class="inline-flex w-3 h-3 mr-1"
                />
                {{ category }}
              </nuxt-link>
            </nav>
          </div>
        </div>
      </div>

      <div class="pt-6 mt-2 border-t-2 border-gray-100">
        <p class="font-bold text-gray-800">
          {{ filteredBlogs.length }}
          post{{ filteredBlogs.length === 1 ? '' : 's' }}
        </p>

        <div class="flex flex-col sm:flex-row">
          <!-- Desktop view with 2 columns -->
          <div class="hidden w-1/2 sm:block flex-no-grow">
            <nuxt-link
              v-for="blog in evenBlogs"
              :key="blog.slug"
              :to="{ name: 'blog-slug', params: { slug: blog.slug } }"
              class="block w-full pt-6 pr-3"
            >
              <blog-summary :blog="blog" />
            </nuxt-link>
          </div>

          <div class="w-1/2 flex-no-grow">
            <nuxt-link
              v-for="blog in oddBlogs"
              :key="blog.slug"
              :to="{ name: 'blog-slug', params: { slug: blog.slug } }"
              class="hidden block w-full pt-6 pl-3 sm:block"
            >
              <blog-summary :blog="blog" />
            </nuxt-link>
          </div>
        </div>

        <!-- Mobile view with one column -->
        <nuxt-link
          v-for="blog in filteredBlogs"
          :key="blog.slug"
          :to="{ name: 'blog-slug', params: { slug: blog.slug } }"
          class="block pt-2 mt-4 sm:hidden"
        >
          <blog-summary :blog="blog" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogSummary from './-BlogSummary.vue'
import { colours } from './-config'

export default {
  components: {
    BlogSummary,
  },

  async asyncData({ $content, params, error }) {
    const blogs = await $content('blog')
      .without(['body'])
      .sortBy('date', 'desc')
      .fetch()
      // eslint-disable-next-line handle-callback-err
      .catch((err) => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    const categories = [...new Set(blogs.map((b) => b.categories).flat())]
    categories.sort()

    return {
      blogs,
      categories,
    }
  },

  data() {
    return {
      colours,
      baseUrl:
        process.env.context === 'production'
          ? process.env.siteUrl
          : process.env.deployPreviewUrl,
    }
  },

  computed: {
    search: {
      get() {
        return this.$route.query.search || ''
      },
      set(value) {
        this.$router.replace({
          ...this.$route,
          query: { ...this.$route.query, search: value || undefined },
        })
      },
    },

    filteredBlogs() {
      let blogs = this.blogs

      if (this.$route.query.category) {
        blogs = blogs.filter((blog) =>
          blog.categories.includes(this.$route.query.category)
        )
      }
      return blogs
    },

    oddBlogs() {
      return this.filteredBlogs.filter((blog, i) => i % 2 === 1)
    },

    evenBlogs() {
      return this.filteredBlogs.filter((blog, i) => i % 2 === 0)
    },
  },

  watch: {
    $route: {
      async handler() {
        // const blogs = await this.$content('blogs')
        //   .search(this.$route.query.search)
        //   .without(['body'])
        //   .sortBy('date', 'desc')
        //   .fetch()
        // this.blogs = blogs
      },
      immediate: true,
    },
  },

  head() {
    return {
      title: 'Blog',
    }
  },
}
</script>
