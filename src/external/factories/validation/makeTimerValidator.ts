import { ValidatorComposite } from '@/external/composites'
import { validators } from '@/external/helpers'

export const makeTimerValidator = (): ValidatorComposite => {
  return ValidatorComposite.build([...validators.hour, ...validators.minute])
}
