<template lang="">
  <a-button @click="handleClick">Click</a-button>
  {{ value }}
  {{ test }}
  <BaseInput v-model="value" v-model:test="test" />
</template>
<script lang="ts" setup>
import BaseInput from '@/components/BaseInput.vue'
import { ref } from 'vue'
const emit = defineEmits<{
  (e: 'action', id: string): void
}>()

const value = ref('adsa')
const test = ref('test')

const handleClick = () => {
  emit('action', '1')
}
</script>
<style lang=""></style>
