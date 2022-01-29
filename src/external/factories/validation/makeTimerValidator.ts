import validators from '@/external/helpers/validators'
import ValidatorComposite from '../../composites/validatorComposite'

const makeTimerValidator = (): ValidatorComposite => {
  return ValidatorComposite.build([...validators.hour, ...validators.minute])
}

export default makeTimerValidator
