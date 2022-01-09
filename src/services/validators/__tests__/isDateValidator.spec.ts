import InvalidFieldError from '@/services/errors/invalidFieldError'
import IFieldValidation from '@/services/validators/protocols/fieldValidation.model'
import IsDateValidator from '../isDateValidator'

const makeSut = (): IFieldValidation => {
  return new IsDateValidator('field')
}

describe('isDateValidator', () => {
  it('should return an InvalidFieldError if field is not a date', () => {
    const sut = makeSut()
    const input = { field: 'any_value' }
    const result = sut.validate(input)

    expect(result).toStrictEqual(new InvalidFieldError('field', 'deve ser uma data válida'))
  })

  it('should return undefined if field is a date', () => {
    const sut = makeSut()
    const input = { field: new Date().toISOString() }
    const result = sut.validate(input)

    expect(result).toBeUndefined()
  })
})
