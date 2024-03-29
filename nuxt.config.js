export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Naledi Hollbruegge | Analytics Consultant',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/qlf4gtl.css' },
    ],
    script: [
      { src: 'https://public.tableau.com/javascripts/api/tableau-2.min.js' },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/styles.css'],
  pageTransition: 'fade',

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/global-components.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: false,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        const { time } = require('reading-time')(document.text)

        document.readingTime = time
      }
    },
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    hotMiddleware: {
      client: {
        overlay: false,
      }
    }
  },

  googleAnalytics: {
    id: 'UA-161391703-1',
  },

  //   router: {
  //     scrollBehavior(to) {
  //       if (to.hash) {
  //         if (document.querySelector(to.hash)) {
  //           return window.scrollTo({
  //             top: document.querySelector(to.hash).offsetTop,
  //             behavior: 'smooth',
  //           })
  //         } else {
  //           return new Promise((resolve) => {
  //             setTimeout(() => {
  //               resolve(
  //                 window.scrollTo({
  //                   top: document.querySelector(to.hash).offsetTop,
  //                   behavior: 'smooth',
  //                 })
  //               )
  //             }, 500)
  //           })
  //         }
  //       } else {
  //         return { x: 0, y: 0 }
  //       }
  //     },
  //   },

  generate: {
    async routes() {
      const { $content } = require('@nuxt/content')
      const files = await $content('blog').only(['slug', 'path']).fetch()
      return files.map((file) => ({ route: file.path }))
    },
  },

  env: {
    siteUrl: process.env.URL || 'http://localhost:3000',
    deployPreviewUrl: process.env.DEPLOY_PRIME_URL || 'http://localhost:3000',
    context: process.env.CONTEXT || 'LOCAL',
  },
}
