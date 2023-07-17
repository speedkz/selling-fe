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
      <div class="grid gap-8 grid-cols-2">
        <div>
          <div class="mb-12 text-4xl">{{ product?.name }}</div>
          <VeeForm :fields="formFields" :initialValues="{ product }" ref="veeForm">
            <template #action="{ handleSubmit }">
              <a-button type="primary" @click="handleSubmit(onSubmit)">Save</a-button>
            </template>
          </VeeForm>
        </div>
        <div>
          <a-skeleton-image class="w-full h-full rounded-lg" />
        </div>
      </div>
    </template>
  </BaseLayout>
</template>
<script lang="ts" setup>
import BaseLayout from '@/layout/BaseLayout.vue'
import type { IProduct } from '@/models/product'
import services from '@/services'
import { useRoute, useRouter } from 'vue-router'
import VeeForm, { type IField, type IFormRef } from '@/components/VeeForm.vue'
import { useMutation } from '@tanstack/vue-query'
import { ref, watch } from 'vue'

const breadcrumbs = [
  { text: 'Home', to: '/' },
  { text: 'Products', to: '/product/list' }
]

const veeForm = ref<IFormRef | null>(null)
const route = useRoute()
const router = useRouter()
const { id } = route.params
const { data: product, isFetched } = services
  .resourceService<IProduct>('products')
  .getOne(id.toString())

watch([isFetched, veeForm], () => {
  if (isFetched.value && veeForm.value) {
    veeForm.value.formRef.setValues(product.value)
  }
})

const formFields: IField[] = [
  {
    label: 'Name',
    name: 'name'
  },
  {
    label: 'Price',
    name: 'price'
  },
  {
    label: 'Description',
    name: 'description',
    as: 'a-textarea'
  }
]

const mutation = useMutation({
  mutationFn: (payload: IProduct) =>
    services.resourceService<IProduct>('products').saveOne(id.toString(), payload),
  onSuccess: () => {
    router.push(`/product/show/${id}`)
  }
})

const onSubmit = (values: any) => {
  mutation.mutate(values)
}
</script>
<style lang="css" scoped>
:deep(.ant-skeleton-image) {
  width: 100%;
  height: 100%;
}
</style>
