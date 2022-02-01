import { Maybe } from '@/helpers'
import { InvalidFieldError } from '../errors'
import { IFieldValidation } from './protocols/fieldValidation.model'

export class EmailValidator implements IFieldValidation {
  constructor (readonly field: string) {}

  validate (input: Record<string, any>): Maybe<Error> {
    const fieldValue = input[this.field]
    const emailRegex = /.+@.+\..+/

    if (!fieldValue || !emailRegex.test(fieldValue)) {
      return new InvalidFieldError(this.field, 'deve ser um email válido')
    }
  }
}
