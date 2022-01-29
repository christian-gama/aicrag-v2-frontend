import validators from '@/external/helpers/validators'
import ValidatorComposite from '../../composites/validatorComposite'

const makeSignInValidator = (): ValidatorComposite => {
  return ValidatorComposite.build([...validators.email, ...validators.password])
}

export default makeSignInValidator
