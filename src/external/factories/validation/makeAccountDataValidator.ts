import { ValidatorComposite } from '@/external/composites'
import { validators } from '@/external/helpers'

export const makeAccountDataValidator = (): ValidatorComposite => {
  return ValidatorComposite.build([...validators.email, ...validators.name])
}
