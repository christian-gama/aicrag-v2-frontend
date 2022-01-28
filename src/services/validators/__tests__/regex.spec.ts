import InvalidFieldError from '@/services/errors/invalidFieldError'
import IFieldValidation from '@/services/validators/protocols/fieldValidation.model'
import Regex from '../regex'

const makeSut = (): IFieldValidation => {
  return new Regex('field', /^[a-z]$/)
}

describe('regex', () => {
  it('returns an InvalidFieldError if field is not matching the regex', () => {
    const sut = makeSut()
    const input = { field: '123' }

    const result = sut.validate(input)

    expect(result).toStrictEqual(
      new InvalidFieldError('field', 'precisa ter caractéres válidos')
    )
  })

  it('returns undefined if field is matching the regex', () => {
    const sut = makeSut()
    const input = { field: 'a' }

    const result = sut.validate(input)

    expect(result).toBeUndefined()
  })
})
