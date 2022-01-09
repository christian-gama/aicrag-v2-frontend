import Maybe from '@/helpers/typescript/maybe.model'
import InvalidFieldError from '../errors/invalidFieldError'
import IFieldValidation from './protocols/fieldValidation.model'

class IsDateValidator implements IFieldValidation {
  constructor (readonly field: string) {}

  validate (input: Record<string, any>): Maybe<Error> {
    const fieldValue = input[this.field]

    if (isNaN(Date.parse(fieldValue))) {
      return new InvalidFieldError(this.field, 'deve ser uma data válida')
    }
  }
}

export default IsDateValidator
