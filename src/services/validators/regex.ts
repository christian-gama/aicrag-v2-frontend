import Maybe from '@/helpers/typescript/maybe.model'
import InvalidFieldError from '../errors/invalidFieldError'
import IFieldValidation from './protocols/fieldValidation.model'

class Regex implements IFieldValidation {
  constructor (readonly field: string, private readonly regex: RegExp) {}

  validate (input: Record<string, any>): Maybe<Error> {
    const fieldValue = input[this.field]

    if (this.regex.test(fieldValue)) {
      return new InvalidFieldError(this.field, 'é inválido')
    }
  }
}

export default Regex
