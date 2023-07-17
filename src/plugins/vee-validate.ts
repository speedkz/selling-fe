import { defineRule } from 'vee-validate'
import AllRules from '@vee-validate/rules'
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})

defineRule('password', (value: string) => {
  if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/.test(value))
    return true
  return 'Password must be at least 8 characters, uppercase, lowercase and digit'
})

defineRule('confirm', (value: string, [target]: any, ctx) => {
  if (value === ctx.form[target]) return true
  return 'Not match'
})
