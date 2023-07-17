<template lang="">
  <div class="flex flex-col gap-4">
    <SectionType title="Our Products" class="mb-5" />
    <div class="grid grid-cols-4 2xl:grid-cols-6 gap-[30px]">
      <template v-if="isFetching">
        <div class="flex flex-col gap-2 items-center" v-for="i in 8" :key="i">
          <a-skeleton-image />
          <a-skeleton-input style="width: 200px" :active="true" size="small" />
          <a-skeleton-input style="width: 80px" :active="true" size="small" />
        </div>
      </template>

      <template v-else>
        <div class="font-medium" v-for="product in showedProducts" :key="product.id">
          <div class="mb-4 cursor-pointer group">
            <div
              class="relative w-full p-10 rounded bg-secondary grid place-content-center overflow-hidden"
            >
              <a-skeleton-image />
              <a-button type="primary" class="absolute w-full -bottom-8 group-hover:bottom-0">
                <router-link :to="`/product/show/${product.id}`"
                  >View product</router-link
                ></a-button
              >
            </div>
          </div>
          <div class="mb-2">{{ product.name }}</div>
          <div class="text-secondary2">${{ product.price }}</div>
        </div>
      </template>
    </div>
    <a-skeleton-button class="self-center" v-if="isFetching" active />
    <a-button v-else class="self-center" type="primary" danger size="large" @click="handleShowAll"
      >View All Products</a-button
    >
  </div>
</template>
<script lang="ts" setup>
import type { IProduct } from '@/models/product';
import services from '@/services';
import { computed, ref } from 'vue';

const showAll = ref(false)
const { data, isFetching } = services.resourceService<IProduct>('products').getList()

const handleShowAll = () => {
  showAll.value = true
}

const showedProducts = computed(() => (showAll.value ? data.value : data.value?.slice(0, 8)))
</script>
<style lang=""></style>
