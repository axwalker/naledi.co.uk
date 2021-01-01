<template>
  <div class="flex flex-col items-center justify-center my-12">
    <transition
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      enter-active-class="transition duration-150"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
      leave-active-class="transition duration-300"
    >
      <div
        v-if="isZoomed"
        class="fixed inset-0 z-50 flex flex-col items-center justify-center max-w-full max-h-full bg-gray-100 bg-opacity-50"
        style="backdrop-filter: blur(10px)"
        @click="isZoomed = !isZoomed"
      >
        <n-icon
          icon="x"
          class="fixed w-6 h-6 text-gray-800 cursor-pointer z-60 right-8 top-8"
          @click="isZoomed = !isZoomed"
        />
        <img
          :src="src"
          :alt="alt || caption"
          :style="caption ? 'margin-bottom: 0' : ''"
        />

        <span v-if="caption" class="block mt-3 text-sm text-center">{{
          caption
        }}</span>
      </div>
    </transition>

    <img
      :src="src"
      :class="imgClass"
      :alt="alt || caption"
      :style="caption ? 'margin-bottom: 0' : ''"
      class="cursor-pointer"
      @click="isZoomed = !isZoomed"
    />

    <span v-if="caption" class="block mt-3 text-sm text-center text-gray-400">{{
      caption
    }}</span>
  </div>
</template>

<script>
import NIcon from '../NIcon.vue'
export default {
  components: { NIcon },
  props: {
    src: {
      type: String,
      required: true,
    },

    alt: {
      type: String,
      default: '',
    },

    caption: {
      type: String,
      default: '',
    },

    imgClass: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      isZoomed: false,
    }
  },

  created() {
    // Make browser back button close zoomed if was zoomed
    const unregisterRouterGuard = this.$router.beforeEach((to, from, next) => {
      const shouldGoBack = !this.isZoomed
      this.isZoomed = false
      next(shouldGoBack)
    })
    this.$once('hook:destroyed', () => unregisterRouterGuard())
  },
}
</script>
