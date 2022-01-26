import Maybe from '@/helpers/typescript/maybe.model'
import IValidation from '@/services/validators/protocols/validation.model'

const makeValidationMock = (
  spyFn: (field: string, input: Record<string, any>) => Maybe<string>
): IValidation => {
  class ValidatorMock implements IValidation {
    validate (field: string, input: Record<string, any>): Maybe<string> {
      return spyFn(field, input)
    }
  }

  return new ValidatorMock()
}

export default makeValidationMock
