import Builder from '../../builders/validatorBuilder'
import ValidatorComposite from '../../composites/validatorComposite'

const makeSignInValidator = (): ValidatorComposite => {
  return ValidatorComposite.build([
    ...Builder.field('email').required().isEmail().build(),
    ...Builder.field('password').required().minLength(6).maxLength(32).build()
  ])
}

export default makeSignInValidator
