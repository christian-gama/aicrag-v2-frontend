import { ValidatorComposite } from '@/external/composites'
import { validators } from '@/external/helpers'

export const makeTaskValidation = (): ValidatorComposite => {
  return ValidatorComposite.build([
    ...validators.questionId,
    ...validators.duration,
    ...validators.commentary
  ])
}
