import InvalidFieldError from '@/services/errors/invalidFieldError'
import CompareFieldsValidator from '@/services/validators/compareFieldsValidator'
import IFieldValidation from '@/services/validators/protocols/fieldValidation.model'
import RequiredFieldValidator from '@/services/validators/requiredFieldValidator'
import ValidatorComposite from '../validatorComposite'

const makeSut = (validators: IFieldValidation[]) => {
  return new ValidatorComposite(validators)
}

describe('validatorComposite', () => {
  it('should return an array of errors', () => {
    const validators = [
      new RequiredFieldValidator('any_field'),
      new CompareFieldsValidator('any_field', 'another_field')
    ]
    const sut = makeSut(validators)

    const result = sut.validate('any_field', { any_field: 'any_value' })

    expect(result).toStrictEqual(new InvalidFieldError('any_field', 'deve ser igual ao campo another_field').message)
  })

  it('should return undefined if there is no error', () => {
    const validators = [
      new RequiredFieldValidator('any_field'),
      new CompareFieldsValidator('any_field', 'another_field')
    ]
    const sut = makeSut(validators)

    const result = sut.validate('any_field', { any_field: 'any_value', another_field: 'any_value' })

    expect(result).toBeUndefined()
  })
})
