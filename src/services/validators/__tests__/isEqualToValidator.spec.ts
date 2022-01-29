import { InvalidFieldError } from '@/services/errors'
import { IFieldValidation, IsEqualToValidator } from '..'

const makeSut = (valueToCompare: string | string[]): IFieldValidation => {
  return new IsEqualToValidator('field', valueToCompare)
}

describe('isEqualToValidator', () => {
  it('returns an InvalidFieldError if field is not equal to valueToCompare', () => {
    const sut = makeSut('different_value')
    const input = { field: 'any_value' }

    const result = sut.validate(input)

    expect(result).toStrictEqual(
      new InvalidFieldError('field', 'deve ser igual a different_value')
    )
  })

  it('returns an InvalidFieldError if field is not equal to one of the valueToCompare', () => {
    const sut = makeSut(['different_value', 'other_value'])
    const input = { field: 'any_value' }

    const result = sut.validate(input)

    expect(result).toStrictEqual(
      new InvalidFieldError(
        'field',
        'deve ser igual a um dos valores: different_value, other_value'
      )
    )
  })

  it('returns undefined if field is equal to valueToCompare', () => {
    const sut = makeSut('any_value')
    const input = { field: 'any_value' }

    const result = sut.validate(input)

    expect(result).toBeUndefined()
  })

  it('returns undefined if field is equal to one of the valuesToCompare', () => {
    const sut = makeSut(['any_value', 'other_value'])
    const input = { field: 'any_value' }

    const result = sut.validate(input)

    expect(result).toBeUndefined()
  })
})
