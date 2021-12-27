import IValidation from '@/domain/validation/validation.model'
import Maybe from '@/application/utils/typescript/maybe.model'

const makeValidationMock = (isValid: boolean): IValidation => {
  class ValidatorMock implements IValidation {
    validate (field: string, input: Record<string, any>): Maybe<string> {
      return isValid ? undefined : 'Error'
    }
  }

  return new ValidatorMock()
}

export default makeValidationMock
