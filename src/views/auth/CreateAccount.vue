<template lang="">
  <SignUp>
    <SendVerifySuccess description="Success" v-if="isSuccess" />
    <template v-else>
      <div class="px-[96px] flex flex-col items-center mb-14">
        <div class="font-medium text-5xl mb-[72px]">Create account</div>
        <VeeForm class="w-full" :fields="formFields" ref="veeForm">
          <template #action="{ handleSubmit, disabled }">
            <a-button
              :disabled="disabled"
              :loading="isLoading"
              size="large"
              class="rounded-3xl"
              type="primary"
              @keydown.enter="handleSubmit(onSubmit)"
              @click="handleSubmit(onSubmit)"
              >Save</a-button
            >
          </template>
        </VeeForm>
      </div>
    </template>
  </SignUp>
</template>
<script lang="ts" setup>
import VeeForm, { type IField, type IFormRef } from '@/components/VeeForm.vue'
import SignUp from './SignUp.vue'
import services from '@/services'
import { useMutation } from '@tanstack/vue-query'
import SendVerifySuccess from './components/SendVerifySuccess.vue'
import { useRoute } from 'vue-router'
import { parseJwt } from '@/helpers/jwt'
import { ref, watch } from 'vue'
import type { IUser } from '@/models/user'
import $axios from '@/services/axiosInstance'

const { query } = useRoute()
const { token = '' } = query
const { email } = parseJwt(token?.toString() ?? '')

const veeForm = ref<IFormRef | null>(null)

watch([veeForm], () => {
  if (veeForm.value) {
    veeForm.value.formRef.setFieldValue('email', email)
  }
})

const formFields: IField[] = [
  {
    label: 'Email',
    name: 'email',
    rules: 'email|required',
    disabled: true
  },
  {
    label: 'Username',
    name: 'username',
    rules: 'min:4'
  },
  {
    label: 'Password',
    name: 'password',
    rules: 'required|password'
  },
  {
    label: 'Confirm password',
    name: 'confirmPassword',
    rules: 'required|confirm:password'
  }
]

const { mutate, isLoading, isSuccess } = useMutation({
  mutationFn: (values: IUser) => {
    $axios.defaults.headers = {
      ...$axios.defaults.headers,
      Authorization: `Bearer ${token}`
    } as any
    return services.resourceService('users').createOne({
      ...values,
      email
    })
  }
})

const onSubmit = (values: IUser) => {
  mutate(values)
}
</script>
<style lang=""></style>
