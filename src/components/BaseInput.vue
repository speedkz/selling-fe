<template lang="">
  <div>
    <a-input v-model:value="value" />
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps(['modelValue', 'test'])
const emit = defineEmits(['update:modelValue', 'update:test'])

const value = computed({
  get() {
    return props.test
  },
  set(value) {
    emit('update:test', value)
  }
})
</script>
<style lang=""></style>
