<template>
  <div class="overlay-loading">
    <div v-if="loading" class="loading-icon">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>

    <div :class="'loading-body' + (loading ? ' active' : '')">
      <slot name="loading-body"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
