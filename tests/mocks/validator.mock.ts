import { IValidator } from '@/domain/validators/validator.model'
import { InvalidInputError } from '@/application/errors/InvalidInputError'

const validatorMock = (isValid: boolean) => {
  return (value: string): IValidator => {
    if (!isValid) {
      return new InvalidInputError('any_field', 'any_reason')
    }
  }
}
export default validatorMock
