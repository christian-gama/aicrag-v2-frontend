import { Maybe } from '@/helpers'
import { InvalidFieldError } from '../errors'
import { IFieldValidation } from './protocols/fieldValidation.model'

export class IsDateValidator implements IFieldValidation {
  constructor (readonly field: string) {}

  validate (input: Record<string, any>): Maybe<Error> {
    const fieldValue = input[this.field]

    if (isNaN(Date.parse(fieldValue))) {
      return new InvalidFieldError(this.field, 'deve ser uma data válida')
    }
  }
}
