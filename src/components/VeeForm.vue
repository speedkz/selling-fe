<template>
  <Form @submit.prevent v-slot="{ handleSubmit, meta }" class="grid gap-3" ref="formRef">
    <div v-for="{ as, name, label, children, ...attrs } in fields" :key="name">
      <label class="mb-2 opacity-40" :for="name">{{ label }}</label>
      <Field :as="as || 'a-input'" :id="name" :name="name" v-bind="attrs">
        <template v-if="children && children.length">
          <component
            v-for="({ tag, text, ...childAttrs }, idx) in children"
            :key="idx"
            :is="tag"
            v-bind="childAttrs"
          >
            {{ text }}
          </component>
        </template>
      </Field>
      <div class="h-4">
        <ErrorMessage class="text-secondary2 text-xs" :name="name" />
      </div>
    </div>
    <slot name="action" :disabled="!meta.valid || !meta.dirty" :handleSubmit="handleSubmit"></slot>
  </Form>
</template>
<script lang="ts" setup>
import { Form, Field, ErrorMessage, type FormActions } from 'vee-validate'
import { ref, type PropType } from 'vue'

export interface IField {
  label: string
  name: string
  as?: string
  rules?: any
  children?: any
  disabled?: boolean
}

export interface IFormRef {
  formRef: FormActions<any, any>
}
defineProps({
  fields: {
    type: Array as PropType<IField[]>,
    default: () => []
  },
  initialValues: {
    type: Object,
    default: () => {}
  }
})

const formRef = ref(null)

defineExpose({
  formRef
})
</script>
