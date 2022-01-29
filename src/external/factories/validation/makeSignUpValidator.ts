import validators from '@/external/helpers/validators'
import ValidatorComposite from '../../composites/validatorComposite'

const makeSignUpValidator = (): ValidatorComposite => {
  return ValidatorComposite.build([
    ...validators.name,
    ...validators.email,
    ...validators.password,
    ...validators.passwordConfirmation
  ])
}

export default makeSignUpValidator
