import Maybe from '@/helpers/typescript/maybe.model'
import InvalidFieldError from '../errors/invalidFieldError'
import IFieldValidation from './protocols/fieldValidation.model'

class IsNumberValidator implements IFieldValidation {
  constructor (readonly field: string) {}

  validate (input: Record<string, any>): Maybe<Error> {
    const fieldValue = input[this.field]

    if (isNaN(fieldValue)) {
      return new InvalidFieldError(this.field, 'deve ser um número')
    }
  }
}

export default IsNumberValidator
