import { Form as veeForm, Field as veeField, ErrorMessage } from 'vee-validate'
import { defineRule } from 'vee-validate'

import { required, email, min, max, alpha_spaces as alphaSpace, numeric } from '@vee-validate/rules'
export default {
  install(app) {
    app.component('vee-form', veeForm)
    app.component('vee-error-message', ErrorMessage)
    app.component('vee-field', veeField)

    defineRule('required', required)
    defineRule('email', email)
    defineRule('min', min)
    defineRule('max', max)
    defineRule('numeric', numeric)

    defineRule('alpha_spaces', alphaSpace)
  },
}
