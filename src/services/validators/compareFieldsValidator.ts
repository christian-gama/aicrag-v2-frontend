import Maybe from '@/helpers/typescript/maybe.model'
import InvalidFieldError from '../errors/invalidFieldError'
import IFieldValidation from './protocols/fieldValidation.model'

class CompareFieldsValidator implements IFieldValidation {
  constructor (readonly field: string, private readonly fieldToCompare: string) {}

  validate (input: Record<string, any>): Maybe<Error> {
    const field = input[this.field]
    const fieldToCompare = input[this.fieldToCompare]

    if (field !== fieldToCompare) {
      return new InvalidFieldError(this.field, `deve ser igual ao campo ${this.fieldToCompare}`)
    }
  }
}

export default CompareFieldsValidator
