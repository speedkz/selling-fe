<template lang="">
  <div class="grid place-content-center text-center gap-4">
    <a-image class="w-24" :src="successIcon" />
    <div class="text-3xl">{{ props.description }}</div>
  </div>
</template>
<script lang="ts" setup>
import successIcon from '@/assets/success.png'

const props = defineProps(['description'])
</script>
<style lang=""></style>
