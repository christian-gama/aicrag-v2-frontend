import Maybe from '@/helpers/typescript/maybe.model'
import InvalidFieldError from '../errors/invalidFieldError'
import IFieldValidation from './protocols/fieldValidation.model'

class MinLengthValidator implements IFieldValidation {
  constructor (readonly field: string, private readonly minLength: number) {}

  validate (input: Record<string, any>): Maybe<Error> {
    const fieldName = input[this.field]

    if (fieldName.length < this.minLength) {
      return new InvalidFieldError(
        this.field,
        `deve ter no mínimo ${this.minLength} caracteres`
      )
    }
  }
}

export default MinLengthValidator
