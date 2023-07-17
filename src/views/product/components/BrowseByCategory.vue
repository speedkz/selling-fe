<template lang="">
  <div>
    <SectionType title="Categories" class="mb-5" />
    <div class="text-4xl font-semibold tracking-[1.44px] mb-[60px]">Browse By Category</div>
    <div class="flex gap-4">
      <div
        class="grid place-content-center border border-gray-300 border-solid basis-1/6 hover:bg-secondary2 hover:text-white h-[145px] text-center"
        v-for="category in categories"
        :key="category.id"
      >
        {{ category.title }}
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import services from '@/services'
import SectionType from './SectionType.vue'
import type { ICategory } from '@/models/category'
import { computed } from 'vue'

const { data } = services.resourceService<ICategory>('categories').getList()
const categories = computed(() => data.value?.slice(0, 8))
</script>
<style lang=""></style>
