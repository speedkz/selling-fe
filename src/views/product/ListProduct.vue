<template lang="">
  <BaseLayout>
    <template #content>
      <BrowseByCategory />
      <a-divider />
      <ExploreProduct />
    </template>
  </BaseLayout>
</template>
<script lang="ts" setup>
import BaseLayout from '@/layout/BaseLayout.vue'
import BrowseByCategory from './components/BrowseByCategory.vue'
import ExploreProduct from './components/ExploreProduct.vue'
</script>
<style lang=""></style>
