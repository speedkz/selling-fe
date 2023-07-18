<template lang="">
  <SignUp>
    <SendVerifySuccess v-if="isSuccess" description="Please check your email" />
    <template v-else>
      <div class="px-[96px] flex flex-col items-center mb-14">
        <template v-if="!isVerified">
          <div class="font-medium text-5xl mb-[72px]">Sign up</div>
          <div class="mb-8 text-primary1">
            By signing up, you agree to the Terms of use and Privacy Policy.
          </div>
          <VeeForm class="w-full" :fields="formFields" ref="veeForm">
            <template #action="{ disabled }">
              <a-button
                :disabled="disabled"
                size="large"
                class="rounded-3xl"
                type="primary"
                @keydown.enter="onSubmit"
                @click="onSubmit"
                >Save</a-button
              >
            </template>
          </VeeForm>
        </template>
        <teamplate v-else>
          <div class="font-medium text-5xl mb-[72px]">Create account</div>
          <VeeForm class="w-full" :fields="userFields" ref="veeForm">
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
          <a-button
            type="primary"
            size="large"
            class="mt-2 w-full rounded-3xl"
            @click="isVerified = false"
            >Back</a-button
          >
        </teamplate>
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
import SignUp from './SignUp.vue'
import { routeNames } from '@/router'
import SendVerifySuccess from './components/SendVerifySuccess.vue'
import { ref } from 'vue'

const isVerified = ref(false)
const formFields: IField[] = [
  {
    label: 'Email',
    name: 'email',
    rules: 'email|required'
  }
]

const userFields: IField[] = [
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

const onSubmit = () => {
  isVerified.value = true
}
</script>
<style lang=""></style>
