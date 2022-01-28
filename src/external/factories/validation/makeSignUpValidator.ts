import Builder from '../../builders/validatorBuilder'
import ValidatorComposite from '../../composites/validatorComposite'

const makeSignUpValidator = (): ValidatorComposite => {
  return ValidatorComposite.build([
    ...Builder.field('name')
      .required()
      .minLength(1)
      .regex(/^[a-zA-Z\u00C0-\u00FF .']*$/g)
      .build(),

    ...Builder.field('email').required().isEmail().build(),

    ...Builder.field('password').required().minLength(6).maxLength(32).build(),

    ...Builder.field('passwordConfirmation')
      .required()
      .minLength(6)
      .maxLength(32)
      .sameAs('password')
      .build()
  ])
}

export default makeSignUpValidator
