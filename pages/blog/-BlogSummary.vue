<template>
  <div
    class="relative flex flex-col h-full mt-0 overflow-hidden rounded-lg shadow-lg"
  >
    <div class="absolute inset-x-0 top-0 h-64 pie-factory opacity-" />
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
          <p class="mt-3 text-base leading-6 text-gray-500">
            {{ blog.summary }}
          </p>
        </a>
      </div>
      <div class="flex items-center mt-6">
        <div class="flex-shrink-0"></div>
        <div class="ml-1">
          <div class="flex text-sm leading-5 text-gray-500">
            <time :datetime="blog.date">
              {{ dateFormat(new Date(blog.date), 'do MMM, yyyy') }}
            </time>
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

<style scoped>
.pie-factory {
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%232980c5' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
}
</style>
