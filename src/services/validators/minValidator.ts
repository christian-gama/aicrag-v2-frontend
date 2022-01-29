import { Maybe } from '@/helpers'
import { InvalidFieldError } from '../errors'
import { IFieldValidation } from './protocols/fieldValidation.model'

export class MinValidator implements IFieldValidation {
  constructor (readonly field: string, private readonly min: number) {}

  validate (input: Record<string, any>): Maybe<Error> {
    const fieldValue = input[this.field]

    if (+fieldValue < this.min) {
      return new InvalidFieldError(
        this.field,
        `deve ser maior ou igual a ${this.min}`
      )
    }
  }
}
