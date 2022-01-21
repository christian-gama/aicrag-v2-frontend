import Maybe from '@/helpers/typescript/maybe.model'
import InvalidFieldError from '../errors/invalidFieldError'
import IFieldValidation from './protocols/fieldValidation.model'

class MaxValidator implements IFieldValidation {
  constructor (readonly field: string, private readonly min: number) {}

  validate (input: Record<string, any>): Maybe<Error> {
    const fieldValue = input[this.field]

    if (+fieldValue > this.min) {
      return new InvalidFieldError(
        this.field,
        `deve ser menor ou igual a ${this.min}`
      )
    }
  }
}

export default MaxValidator
