<template>
  <div
    class="relative flex flex-col overflow-hidden transition transform rounded-lg shadow hover:shadow-lg hover:-translate-x-1 hover:-translate-y-1"
  >
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

    <div class="relative flex flex-col justify-between flex-1 p-6">
      <div class="flex-1">
        <span
          v-for="(category, i) in blog.categories || []"
          :key="category"
          class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mr-2 border"
          :class="`bg-${colours[i]}-100 text-${colours[i]}-800 border-${colours[i]}-300`"
        >
          <n-icon :icon="icons[i]" class="inline-flex w-3 h-3 mr-1" />
          {{ category }}
        </span>

        <a href="#" class="block">
          <h3 class="mt-2 text-xl font-semibold leading-7 text-gray-900">
            {{ blog.title }}
          </h3>
          <p class="mt-5 text-sm leading-6 text-gray-500">
            {{ blog.summary }}
          </p>
        </a>
      </div>
      <div class="flex items-center mt-6">
        <!-- <div class="flex-shrink-0"></div> -->
        <div class="w-full mx-1">
          <div
            class="flex items-center justify-between text-sm leading-5 text-gray-400"
          >
            <div class="flex items-center">
              <n-icon icon="calendar" class="inline-flex w-4 h-4 mr-1.5" />
              <time :datetime="blog.date">
                {{ dateFormat(new Date(blog.date), 'do MMM, yyyy') }}
              </time>
            </div>

            <div class="flex items-center">
              <n-icon icon="clock" class="inline-flex w-4 h-4 ml-4 mr-1.5" />
              {{ Math.round(blog.readingTime / 60000) + 1 }} minutes
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { format } from 'date-fns'
import { colours } from './-config'

export default {
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },

  computed: {
    colours() {
      return this.blog.categories.map((cat) => colours[cat].colour)
    },
    icons() {
      return this.blog.categories.map((cat) => colours[cat].icon)
    },
  },

  methods: {
    dateFormat: format,
  },
}
</script>
