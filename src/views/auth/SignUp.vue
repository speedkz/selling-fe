<template lang="">
  <div class="h-screen grid grid-cols-3">
    <div class="col-span-2 relative flex flex-col justify-center items-center p-12">
      <a-avatar :size="64" :src="logo" shape="circle" class="absolute top-12 left-12" />
      <slot></slot>
    </div>
    <div class="grid place-content-center bg-secondary">
      <a-skeleton-image />
    </div>
  </div>
</template>
<script lang="ts" setup>
import logo from '@/assets/logo.jpg'
</script>
<style lang=""></style>
