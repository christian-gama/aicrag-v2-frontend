import InvalidFieldError from '@/services/errors/invalidFieldError'
import IFieldValidation from '@/services/validators/protocols/fieldValidation.model'
import MaxLengthValidator from '../maxLengthValidator'

const makeSut = (): IFieldValidation => {
  return new MaxLengthValidator('field', 5)
}

describe('maxLengthValidator', () => {
  it('returns an InvalidFieldError if field is greater than maxLength', () => {
    const sut = makeSut()
    const input = { field: '123456' }

    const result = sut.validate(input)

    expect(result).toStrictEqual(
      new InvalidFieldError('field', 'deve ter no máximo 5 caracteres')
    )
  })

  it('returns undefined if field is less than maxLength', () => {
    const sut = makeSut()
    const input = { field: '12345' }

    const result = sut.validate(input)

    expect(result).toBeUndefined()
  })
})
