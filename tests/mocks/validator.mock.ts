import Maybe from '@/helpers/typescript/maybe.model'
import IValidation from '@/domain/validation/validation.model'

const makeValidationMock = (isValid: boolean): IValidation => {
  class ValidatorMock implements IValidation {
    validate (field: string, input: Record<string, any>): Maybe<string> {
      return isValid ? undefined : 'Error'
    }
  }

  return new ValidatorMock()
}

export default makeValidationMock
