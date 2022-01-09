import IFieldValidation from '@/domain/validation/fieldValidation.model'
import InvalidFieldError from '@/services/errors/invalidFieldError'
import Regex from '../regex'

const makeSut = (): IFieldValidation => {
  return new Regex('field', /[^a-z]$/)
}

describe('regex', () => {
  it('should return an InvalidFieldError if field is not matching the regex', () => {
    const sut = makeSut()
    const input = { field: '123' }
    const result = sut.validate(input)

    expect(result).toStrictEqual(new InvalidFieldError('field', 'é inválido'))
  })

  it('should return undefined if field is matching the regex', () => {
    const sut = makeSut()
    const input = { field: 'a' }
    const result = sut.validate(input)

    expect(result).toBeUndefined()
  })
})
