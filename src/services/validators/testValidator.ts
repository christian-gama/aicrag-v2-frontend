import { Maybe } from '@/helpers'
import { InvalidFieldError } from '../errors'
import { IFieldValidation } from './protocols/fieldValidation.model'

export class TestValidator implements IFieldValidation {
  constructor (
    readonly field: string,
    readonly fn: (input: Record<string, any>) => Maybe<InvalidFieldError>
  ) {}

  validate (input: Record<string, any>): Maybe<Error> {
    return this.fn(input)
  }
}
