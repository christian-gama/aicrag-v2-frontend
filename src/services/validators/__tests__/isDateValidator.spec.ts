import { InvalidFieldError } from '@/services/errors'
import { IFieldValidation, IsDateValidator } from '..'

const makeSut = (): IFieldValidation => {
  return new IsDateValidator('field')
}

describe('isDateValidator', () => {
  it('returns an InvalidFieldError if field is not a date', () => {
    const sut = makeSut()
    const input = { field: 'any_value' }

    const result = sut.validate(input)

    expect(result).toStrictEqual(
      new InvalidFieldError('field', 'deve ser uma data válida')
    )
  })

  it('returns undefined if field is a date', () => {
    const sut = makeSut()
    const input = { field: new Date().toISOString() }

    const result = sut.validate(input)

    expect(result).toBeUndefined()
  })

  it('returns InvalidParamError if its not in the correct format', () => {
    const sut = makeSut()
    const input = { field: new Date().toString() }

    const result = sut.validate(input)

    expect(result).toStrictEqual(
      new InvalidFieldError('field', 'deve ser uma data válida')
    )
  })
})
