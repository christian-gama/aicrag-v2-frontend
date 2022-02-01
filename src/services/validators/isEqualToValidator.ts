import { Maybe } from '@/helpers'
import { InvalidFieldError } from '../errors'
import { IFieldValidation } from '././protocols/fieldValidation.model'

export class IsEqualToValidator implements IFieldValidation {
  constructor (
    readonly field: string,
    readonly valueToCompare: string | string[]
  ) {}

  validate (input: Record<string, any>): Maybe<Error> {
    const fieldValue = input[this.field] as string

    if (this.valueToCompare instanceof Array) {
      if (!this.valueToCompare.includes(fieldValue)) {
        return new InvalidFieldError(
          this.field,
          'deve ser igual a um dos valores: ' + this.valueToCompare.join(', ')
        )
      }

      return
    }

    if (fieldValue !== this.valueToCompare) {
      return new InvalidFieldError(
        this.field,
        `deve ser igual a ${this.valueToCompare}`
      )
    }
  }
}
