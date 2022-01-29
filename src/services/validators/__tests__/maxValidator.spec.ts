import { InvalidFieldError } from '@/services/errors'
import { IFieldValidation, MaxValidator } from '..'

const makeSut = (): IFieldValidation => {
  return new MaxValidator('field', 5)
}

describe('maxValidator', () => {
  it('returns an InvalidFieldError if field is greater than max', () => {
    const sut = makeSut()
    const input = { field: 6 }

    const result = sut.validate(input)

    expect(result).toStrictEqual(
      new InvalidFieldError('field', 'deve ser menor ou igual a 5')
    )
  })

  it('returns undefined if field is less than max', () => {
    const sut = makeSut()
    const input = { field: 5 }

    const result = sut.validate(input)

    expect(result).toBeUndefined()
  })
})
