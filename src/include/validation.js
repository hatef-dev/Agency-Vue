import { Form as veeForm, Field as veeField, ErrorMessage, configure } from 'vee-validate'
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

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `This field ${ctx.field} is required`,
          email: `This field ${ctx.field} must be a valid email`,
          alpha_spaces: `This field ${ctx.field} must contain only letters and spaces`,
          numeric: `This field ${ctx.field} must be a valid number`,
          min: `This field ${ctx.field} must be greater than or equal `,
          max: `This field ${ctx.field} must be less than or equal `,
        }

        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `This field ${ctx.field} is invalid`
        return message
      },
      validateOnBlur: true, // ✅ validate when user leaves the field
      validateOnChange: true, // ✅ validate if user selects a different value
      validateOnInput: false, // 🚫 avoid validating every keystroke (too noisy)
      validateOnModelUpdate: true,
    })
  },
}
