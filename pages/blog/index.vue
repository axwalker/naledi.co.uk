<template>
  <div class="px-4 pt-4 pb-20 bg-white sm:px-6 lg:pb-28 lg:px-8">
    <div class="relative max-w-lg mx-auto lg:max-w-4xl">
      <div>
        <h2
          class="mt-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-5xl sm:leading-10"
        >
          Blog
        </h2>
        <div class="mt-8">
          <div class="flex flex-col justify-end md:items-center md:flex-row">
            <nav class="flex flex-wrap sm:justify-end sm:p-1">
              <nuxt-link
                v-for="category in categories"
                :key="category"
                :to="{
                  name: 'blog',
                  query: {
                    category:
                      category === $route.query.category ? undefined : category,
                  },
                }"
                class="my-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mr-2 border"
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

      <div
        class="grid gap-16 pt-12 mt-2 border-t-2 border-gray-100 lg:grid-cols-2 lg:col-gap-5 lg:row-gap-12"
      >
        <nuxt-link
          v-for="blog in filteredBlogs"
          :key="blog.slug"
          :to="{ name: 'blog-slug', params: { slug: blog.slug } }"
          class="h-full"
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
    const blogs = await $content('blogs')
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
    filteredBlogs() {
      if (!this.$route.query.category) return this.blogs
      return this.blogs.filter((blog) =>
        blog.categories.includes(this.$route.query.category)
      )
    },
  },
  head() {
    return {
      title: 'Blog',
    }
  },
}
</script>
