import { ValidatorComposite } from '@/external/composites'
import { validators } from '@/external/helpers'

export const makeSignInValidator = (): ValidatorComposite => {
  return ValidatorComposite.build([...validators.email, ...validators.password])
}
