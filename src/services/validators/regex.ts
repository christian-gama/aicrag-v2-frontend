import { Maybe } from '@/helpers'
import { InvalidFieldError } from '../errors'
import { IFieldValidation } from './protocols/fieldValidation.model'

export class Regex implements IFieldValidation {
  constructor (readonly field: string, private readonly regex: RegExp) {}

  validate (input: Record<string, any>): Maybe<Error> {
    const fieldValue = input[this.field]

    if (!fieldValue.match(this.regex)) {
      return new InvalidFieldError(this.field, 'precisa ter caractéres válidos')
    }
  }
}
