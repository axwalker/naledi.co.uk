<template>
  <div class="flex flex-col items-center justify-center my-12">
    <img :src="src" :class="imgClass" :alt="alt || caption" />

    <span v-if="caption" class="block text-sm text-center">{{ caption }}</span>
  </div>
</template>

<script>
export default {
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
}
</script>
