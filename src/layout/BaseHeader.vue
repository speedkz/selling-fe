<template lang="">
  <div
    class="w-full flex items-center pb-4 pt-10 border-b px-[50px]"
    :class="{ 'fixed top-0 shadow-md pt-4 bg-white z-20 px-0': fixed }"
  >
    <div class="text-2xl font-bold">Marketplace</div>
    <div class="flex grow justify-center">
      <div v-for="menuItem in currentMenuItems" :key="menuItem.text">
        <router-link
          class="text-black hover:bg-black hover:text-white hover:font-normal px-4 rounded py-2"
          :to="menuItem.to"
          :active-class="'hover:bg-black hover:text-white px-4'"
        >
          {{ menuItem.text }}</router-link
        >
      </div>
    </div>
    <div class="flex items-center gap-4">
      <div class="font-medium">{{ currentUser?.firstName }} {{ currentUser?.lastName }}</div>
      <a-avatar :src="currentUser?.avatar?.[0]?.url" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { inject, onMounted, onUnmounted, ref } from 'vue'

const fixed = ref(false)
const currentUser = inject('currentUser', {})
const currentMenuItems = [
  {
    text: 'Home',
    to: '/'
  },
  {
    text: 'Marketplace',
    to: '/marketplace'
  },
  {
    text: 'Sell',
    to: '/sell'
  },
  {
    text: 'Product',
    to: '/product/list'
  },
  {
    text: 'Buy',
    to: '/by'
  }
]

onMounted(() => {
  document.addEventListener('scroll', () => {
    fixed.value = window.scrollY > 0
  })
})

onUnmounted(() => {
  document.removeEventListener('scroll', () => {
    fixed.value = false
  })
})
</script>
<style lang=""></style>
