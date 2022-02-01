import { ValidatorComposite } from '@/external/composites'
import { validators } from '@/external/helpers'

export const makeSignUpValidator = (): ValidatorComposite => {
  return ValidatorComposite.build([
    ...validators.name,
    ...validators.email,
    ...validators.password,
    ...validators.passwordConfirmation
  ])
}
