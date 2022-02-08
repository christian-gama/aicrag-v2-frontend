import { Maybe } from '@/helpers'
import { InvalidFieldError } from '@/services/errors'
import { IFieldValidation, TestValidator } from '..'

const makeSut = (
  fn: (field: string, input: Record<string, any>) => Maybe<InvalidFieldError>
): IFieldValidation => {
  return new TestValidator('field', fn)
}

describe('test', () => {
  it('returns an InvalidFieldError if fn returns an error', () => {
    const sut = makeSut((field, input) => {
      return new InvalidFieldError(field, 'error')
    })
    const input = { field: '123' }

    const result = sut.validate(input)

    expect(result).toStrictEqual(new InvalidFieldError('field', 'error'))
  })

  it('returns undefined if validation succeds', () => {
    const sut = makeSut((field, input) => {
      return input.field === 'a'
        ? undefined
        : new InvalidFieldError(field, 'error')
    })
    const input = { field: 'a' }

    const result = sut.validate(input)

    expect(result).toBeUndefined()
  })
})
