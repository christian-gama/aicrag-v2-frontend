import IFieldValidation from '@/domain/validation/fieldValidation.model'
import InvalidFieldError from '@/services/errors/invalidFieldError'
import IsNumberValidator from '../isNumberValidator'

const makeSut = (): IFieldValidation => {
  return new IsNumberValidator('field')
}

describe('isNumberValidator', () => {
  it('should return an InvalidFieldError if field is not a number', () => {
    const sut = makeSut()
    const input = { field: 'any_value' }
    const result = sut.validate(input)

    expect(result).toStrictEqual(new InvalidFieldError('field', 'deve ser um número'))
  })

  it('should return undefined if field is a number', () => {
    const sut = makeSut()
    const input = { field: 5 }
    const result = sut.validate(input)

    expect(result).toBeUndefined()
  })
})
