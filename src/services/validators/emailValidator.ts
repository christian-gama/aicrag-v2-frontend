import Maybe from '@/helpers/typescript/maybe.model'
import InvalidFieldError from '../errors/invalidFieldError'
import IFieldValidation from './protocols/fieldValidation.model'

class EmailValidator implements IFieldValidation {
  constructor (readonly field: string) {}

  validate (input: Record<string, any>): Maybe<Error> {
    const fieldValue = input[this.field]
    const emailRegex = /.+@.+\..+/

    if (!fieldValue || !emailRegex.test(fieldValue)) {
      return new InvalidFieldError(this.field, 'deve ser um email válido')
    }
  }
}

export default EmailValidator
