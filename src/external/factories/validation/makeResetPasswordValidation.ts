import validators from '@/external/helpers/validators'
import ValidatorComposite from '../../composites/validatorComposite'

const makeResetPasswordValidation = (): ValidatorComposite => {
  return ValidatorComposite.build([
    ...validators.password,
    ...validators.passwordConfirmation
  ])
}

export default makeResetPasswordValidation
