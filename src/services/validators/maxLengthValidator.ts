import { Maybe } from '@/helpers'
import { InvalidFieldError } from '../errors'
import { IFieldValidation } from './protocols/fieldValidation.model'

export class MaxLengthValidator implements IFieldValidation {
  constructor (readonly field: string, private readonly maxLength: number) {}

  validate (input: Record<string, any>): Maybe<Error> {
    const fieldValue = input[this.field]

    if (fieldValue.length > this.maxLength) {
      return new InvalidFieldError(
        this.field,
        `deve ter no máximo ${this.maxLength} caracteres`
      )
    }
  }
}
