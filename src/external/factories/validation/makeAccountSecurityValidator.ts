import { ValidatorComposite } from '@/external/composites'
import { validators } from '@/external/helpers'

export const makeAccountSecurityValidator = (): ValidatorComposite => {
  return ValidatorComposite.build([
    ...validators.currentPassword,
    ...validators.password,
    ...validators.passwordConfirmation
  ])
}
