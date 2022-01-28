import faker from 'faker'
import InvalidFieldError from '@/services/errors/invalidFieldError'
import IFieldValidation from '@/services/validators/protocols/fieldValidation.model'
import EmailValidator from '../emailValidator'

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
