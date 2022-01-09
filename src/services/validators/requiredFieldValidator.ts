import Maybe from '@/helpers/typescript/maybe.model'
import InvalidFieldError from '../errors/invalidFieldError'
import IFieldValidation from './protocols/fieldValidation.model'

class RequiredFieldValidator implements IFieldValidation {
  constructor (readonly field: string) {}

  validate (input: Record<string, any>): Maybe<Error> {
    const fieldValue = input[this.field]

    if (!fieldValue) {
      return new InvalidFieldError(this.field, 'é obrigatório')
    }
  }
}

export default RequiredFieldValidator
