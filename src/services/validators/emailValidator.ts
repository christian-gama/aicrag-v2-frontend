import * as emailValidator from 'email-validator'
import { Maybe } from '@/helpers'
import { InvalidFieldError } from '../errors'
import { IFieldValidation } from './protocols/fieldValidation.model'

export class EmailValidator implements IFieldValidation {
  constructor (readonly field: string) {}

  validate (input: Record<string, any>): Maybe<Error> {
    const fieldValue = input[this.field]
    const isValidEmail = emailValidator.validate(fieldValue)

    if (!fieldValue || !isValidEmail) {
      return new InvalidFieldError(this.field, 'deve ser um email válido')
    }
  }
}
