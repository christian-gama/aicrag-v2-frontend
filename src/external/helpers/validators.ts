import Builder from '../builders/validatorBuilder'

const validators = {
  name: Builder.field('name')
    .required()
    .minLength(1)
    .regex(/^[a-zA-Z\u00C0-\u00FF .']*$/g)
    .build(),

  email: Builder.field('email').required().isEmail().build(),

  password: Builder.field('password')
    .required()
    .minLength(6)
    .maxLength(32)
    .build(),

  passwordConfirmation: Builder.field('passwordConfirmation')
    .required()
    .minLength(6)
    .maxLength(32)
    .sameAs('password')
    .build(),

  hour: Builder.field('hour').required().isNumber().max(23).build(),

  minute: Builder.field('minute').required().isNumber().max(59).build()
} as const

export default validators
