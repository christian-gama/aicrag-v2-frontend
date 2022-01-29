import validators from '@/external/helpers/validators'
import ValidatorComposite from '../../composites/validatorComposite'

const makeForgotPasswordValidator = (): ValidatorComposite => {
  return ValidatorComposite.build([...validators.email])
}

export default makeForgotPasswordValidator
