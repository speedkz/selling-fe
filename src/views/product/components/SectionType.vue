<template lang="">
  <div class="flex gap-4 items-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="40" viewBox="0 0 20 40" fill="none">
      <rect width="20" height="40" rx="4" :fill="color" />
    </svg>
    <div class="font-semibold" :style="{ color }">{{ title }}</div>
  </div>
</template>
<script lang="ts" setup>
defineProps({
  title: String,
  color: {
    type: String,
    default: '#DB4444'
  }
})
</script>
<style lang=""></style>
