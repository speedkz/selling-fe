<template>
  <a-layout class="h-screen bg-white">
    <a-layout-header class="bg-transparent flex gap-12 px-0">
      <Header />
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <div class="my-[80px]">
        <slot name="breadcrumb"> </slot>
      </div>

      <slot name="content"> </slot>
    </a-layout-content>
  </a-layout>
</template>
<script lang="ts" setup>
import Header from './BaseHeader.vue'
</script>
