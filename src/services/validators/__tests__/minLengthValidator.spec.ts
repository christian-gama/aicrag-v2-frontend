import InvalidFieldError from '@/services/errors/invalidFieldError'
import IFieldValidation from '@/services/validators/protocols/fieldValidation.model'
import MinLengthValidator from '../minLengthValidator'

const makeSut = (): IFieldValidation => {
  return new MinLengthValidator('field', 5)
}

describe('minLengthValidator', () => {
  it('should return an InvalidFieldError if field is greater than maxLength', () => {
    const sut = makeSut()
    const input = { field: '1234' }
    const result = sut.validate(input)

    expect(result).toStrictEqual(
      new InvalidFieldError('field', 'deve ter no mínimo 5 caracteres')
    )
  })

  it('should return undefined if field is less than maxLength', () => {
    const sut = makeSut()
    const input = { field: '12345' }
    const result = sut.validate(input)

    expect(result).toBeUndefined()
  })
})
