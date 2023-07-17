<template lang="">
  <BaseLayout>
    <template #breadcrumb>
      <a-breadcrumb>
        <a-breadcrumb-item v-for="(item, i) in breadcrumbs" :key="i">
          <router-link :to="item.to">{{ item.text }}</router-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item>{{ product?.name }}</a-breadcrumb-item>
      </a-breadcrumb>
    </template>
    <template #content>
      <div class="grid gap-8 grid-cols-[auto_1fr_300px]">
        <div class="flex flex-col gap-4"><a-skeleton-image v-for="i in 4" :key="i" /></div>
        <div class="grid place-content-center bg-secondary">
          <a-skeleton-image />
        </div>
        <div class="flex flex-col gap-4">
          <div class="font-semibold text-2xl">{{ product?.name }}</div>
          <div class="text-2xl">${{ product?.price }}</div>
          <div class="text-sm">{{ product?.description }}</div>
          <a-button type="primary"
            ><router-link :to="`/product/edit/${id}`">Edit</router-link></a-button
          >
        </div>
      </div>
    </template>
  </BaseLayout>
</template>
<script lang="ts" setup>
import BaseLayout from '@/layout/BaseLayout.vue'
import type { IProduct } from '@/models/product'
import services from '@/services'
import { inject } from 'vue'
import { useRoute } from 'vue-router'
const currentUser = inject('currentUser', {})
const breadcrumbs = [
  { text: 'Home', to: '/' },
  { text: 'Products', to: '/product/list' }
]
const route = useRoute()
const { id } = route.params
const { data: product } = services.resourceService<IProduct>('products').getOne(id.toString())
</script>
<style lang=""></style>
