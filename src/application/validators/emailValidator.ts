import Maybe from '@/application/utils/typescript/maybe.model'
import IFieldValidation from '../../domain/validation/fieldValidation.model'
import InvalidFieldError from '../errors/invalidFieldError'

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
