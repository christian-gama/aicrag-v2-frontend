import { ValidatorComposite } from '@/external/composites'
import { validators } from '@/external/helpers'

export const makeResetPasswordValidation = (): ValidatorComposite => {
  return ValidatorComposite.build([
    ...validators.password,
    ...validators.passwordConfirmation
  ])
}
