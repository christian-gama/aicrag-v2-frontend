import Builder from '../../builders/validatorBuilder'
import ValidatorComposite from '../../composites/validatorComposite'

const makeResetPasswordValidation = (): ValidatorComposite => {
  return ValidatorComposite.build([
    ...Builder.field('password').required().minLength(6).maxLength(32).build(),

    ...Builder.field('passwordConfirmation')
      .required()
      .minLength(6)
      .maxLength(32)
      .sameAs('password')
      .build()
  ])
}

export default makeResetPasswordValidation
