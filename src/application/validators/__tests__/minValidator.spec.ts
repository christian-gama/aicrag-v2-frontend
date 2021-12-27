import IFieldValidation from '@/domain/validation/fieldValidation.model'
import InvalidFieldError from '@/application/errors/invalidFieldError'
import MinValidator from '../minValidator'

const makeSut = (): IFieldValidation => {
  return new MinValidator('field', 5)
}

describe('minValidator', () => {
  it('should return an InvalidFieldError if field is greater than min', () => {
    const sut = makeSut()
    const input = { field: 4 }
    const result = sut.validate(input)

    expect(result).toStrictEqual(new InvalidFieldError('field', 'deve ser maior ou igual a 5'))
  })

  it('should return undefined if field is lesser than min', () => {
    const sut = makeSut()
    const input = { field: 5 }
    const result = sut.validate(input)

    expect(result).toBeUndefined()
  })
})
