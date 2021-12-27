import Maybe from '@/application/utils/typescript/maybe.model'
import IFieldValidation from '../../domain/validation/fieldValidation.model'
import InvalidFieldError from '../errors/invalidFieldError'

class MinValidator implements IFieldValidation {
  constructor (readonly field: string, private readonly min: number) {}

  validate (input: Record<string, any>): Maybe<Error> {
    const fieldValue = input[this.field]

    if (+fieldValue < this.min) {
      return new InvalidFieldError(this.field, `deve ser maior ou igual a ${this.min}`)
    }
  }
}

export default MinValidator
