/* eslint-disable @typescript-eslint/no-unnecessary-boolean-literal-compare */
import InvalidInputError from '@/application/errors/invalidInputError'
import IValidator from '@/application/validators/protocols/validator.model'

const validatorMock = (isValid?: boolean): IValidator => {
  return (value: string) => {
    if (isValid === false) {
      return new InvalidInputError('any_field', 'any_reason')
    }

    if (isValid === true) {
      return undefined
    }

    if (value !== 'any_value') {
      return new InvalidInputError('any_field', 'any_reason')
    }
  }
}
export default validatorMock
