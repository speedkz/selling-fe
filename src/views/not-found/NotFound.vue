<template lang="">
  <BaseLayout>
    <template #content>
      <div class="w-full h-full grid place-content-center text-center">
        <div class="leading-[115px] text-[110px] font-normal mb-10">404 Not Found</div>
        <div class="mb-20">Your visited page not found. You may go home page.</div>
        <a-button type="primary" danger size="large" class="place-self-center"
          >Back to home page</a-button
        >
      </div>
    </template>
  </BaseLayout>
</template>
<script lang="ts" setup>
import BaseLayout from '@/layout/BaseLayout.vue'
</script>
<style lang=""></style>
