import { InvalidFieldError } from '@/services/errors'
import { ValidatorBuilder } from '../builders'

export const validators = {
  name: ValidatorBuilder.field('name')
    .required()
    .minLength(1)
    .regex(/^[a-zA-Z\u00C0-\u00FF .']*$/g)
    .build(),

  email: ValidatorBuilder.field('email').required().isEmail().build(),

  currentPassword: ValidatorBuilder.field('currentPassword')
    .required()
    .minLength(6)
    .maxLength(32)
    .test((field, input) => {
      if (input.currentPassword === input.password) {
        return new InvalidFieldError(
          field,
          'precisa ser diferente da nova senha'
        )
      }
    })
    .build(),

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

  minute: ValidatorBuilder.field('minute')
    .required()
    .isNumber()
    .max(59)
    .build(),

  taskId: ValidatorBuilder.field('taskId').maxLength(120).build(),

  duration: ValidatorBuilder.field('duration')
    .required()
    .isNumber()
    .min(0)
    .test((field, input) => {
      if (input.type === 'TX' && input.duration > 30) {
        return new InvalidFieldError(field, 'deve ter no máximo 30 minutos')
      }

      if (input.type === 'QA' && input.duration > 2.5) {
        return new InvalidFieldError(field, 'deve ter no máximo 2,5 minutos')
      }
    })
    .build(),

  commentary: ValidatorBuilder.field('commentary').maxLength(400).build()
} as const
