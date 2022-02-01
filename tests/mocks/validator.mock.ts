import { Maybe } from '@/helpers'
import { IValidation } from '@/services/validators'

export const makeMockValidation = (
  spyFn: (field: string, input: Record<string, any>) => Maybe<string>
): IValidation => {
  class ValidatorMock implements IValidation {
    validate (field: string, input: Record<string, any>): Maybe<string> {
      return spyFn(field, input)
    }
  }

  return new ValidatorMock()
}
