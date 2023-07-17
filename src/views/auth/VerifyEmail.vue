<template lang="">
  <SignUp>
    <SendVerifySuccess v-if="isSuccess" description="Please check your email"/>
    <template v-else>
      <div class="px-[96px] flex flex-col items-center mb-14">
        <div class="font-medium text-5xl mb-[72px]">Sign up</div>
        <div class="mb-8 text-primary1">
          By signing up, you agree to the Terms of use and Privacy Policy.
        </div>
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
      <div>
        Already have an account?
        <router-link
          :to="{
            name: routeNames.signin
          }"
          >Log in</router-link
        >
      </div>
    </template>
  </SignUp>
</template>
<script lang="ts" setup>
import VeeForm, { type IField } from '@/components/VeeForm.vue'
import SignUp from "./SignUp.vue"
import { routeNames } from '@/router'
import services from '@/services'
import { useMutation } from '@tanstack/vue-query'
import SendVerifySuccess from './components/SendVerifySuccess.vue'

const formFields: IField[] = [
  {
    label: 'Email',
    name: 'email',
    rules: 'email|required'
  }
]

const { mutate, isLoading, isSuccess } = useMutation({
  mutationFn: (email: string) => services.authService.verifyEmail(email)
})

const onSubmit = ({ email }: { email: string }) => {
  mutate(email)
}
</script>
<style lang=""></style>
