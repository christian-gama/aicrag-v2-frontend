import { InvalidFieldError } from '@/services/errors'
import faker from 'faker'
import { IFieldValidation, EmailValidator } from '..'

const makeSut = (): IFieldValidation => {
  return new EmailValidator('field')
}

describe('emailValidator', () => {
  it('returns an InvalidFieldError if field is not an email', () => {
    const sut = makeSut()
    const input = { field: 'invalid@email' }

    const result = sut.validate(input)

    expect(result).toStrictEqual(
      new InvalidFieldError('field', 'deve ser um email válido')
    )
  })

  it('returns undefined if field is an email', () => {
    const sut = makeSut()
    const input = { field: faker.internet.email() }

    const result = sut.validate(input)

    expect(result).toBeUndefined()
  })
})
