import Builder from '../../builders/validatorBuilder'
import ValidatorComposite from '../../composites/validatorComposite'

const makeForgotPasswordValidator = (): ValidatorComposite => {
  return ValidatorComposite.build([...Builder.field('email').required().isEmail().build()])
}

export default makeForgotPasswordValidator
