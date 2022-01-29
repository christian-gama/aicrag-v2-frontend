import { ValidatorComposite } from '@/external/composites'
import { validators } from '@/external/helpers'

export const makeForgotPasswordValidator = (): ValidatorComposite => {
  return ValidatorComposite.build([...validators.email])
}
