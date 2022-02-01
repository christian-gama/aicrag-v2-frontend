import { ValidatorBuilder } from '../builders'

export const validators = {
  name: ValidatorBuilder.field('name')
    .required()
    .minLength(1)
    .regex(/^[a-zA-Z\u00C0-\u00FF .']*$/g)
    .build(),

  email: ValidatorBuilder.field('email').required().isEmail().build(),

  password: ValidatorBuilder.field('password')
    .required()
    .minLength(6)
    .maxLength(32)
    .build(),

  passwordConfirmation: ValidatorBuilder.field('passwordConfirmation')
    .required()
    .minLength(6)
    .maxLength(32)
    .sameAs('password')
    .build(),

  hour: ValidatorBuilder.field('hour').required().isNumber().max(23).build(),

  minute: ValidatorBuilder.field('minute').required().isNumber().max(59).build()
} as const
