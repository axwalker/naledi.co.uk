<template>
  <p>
    <img :src="src" />

    <span v-if="caption" class="block text-sm text-center">{{ caption }}</span>
  </p>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      required: true,
    },
  },
}
</script>
