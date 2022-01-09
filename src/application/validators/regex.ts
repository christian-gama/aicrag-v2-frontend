import Maybe from '@/application/utils/typescript/maybe.model'
import IFieldValidation from '../../domain/validation/fieldValidation.model'
import InvalidFieldError from '../errors/invalidFieldError'

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
