import faker from 'faker'
import IFieldValidation from '@/domain/validation/fieldValidation.model'
import InvalidFieldError from '@/application/errors/invalidFieldError'
import EmailValidator from '../emailValidator'

const makeSut = (): IFieldValidation => {
  return new EmailValidator('field')
}

describe('emailValidator', () => {
  it('should return an InvalidFieldError if field is not an email', () => {
    const sut = makeSut()
    const input = { field: 'invalid@email' }
    const result = sut.validate(input)

    expect(result).toStrictEqual(new InvalidFieldError('field', 'deve ser um email válido'))
  })

  it('should return undefined if field is an email', () => {
    const sut = makeSut()
    const input = { field: faker.internet.email() }
    const result = sut.validate(input)

    expect(result).toBeUndefined()
  })
})
