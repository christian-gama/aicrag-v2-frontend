import IFieldValidation from '@/domain/validation/fieldValidation.model'
import InvalidFieldError from '@/services/errors/invalidFieldError'
import RequiredFieldValidator from '../requiredFieldValidator'

const makeSut = (): IFieldValidation => {
  return new RequiredFieldValidator('field')
}

describe('requiredFieldValidator', () => {
  it('should return an InvalidFieldError if field is not defined', () => {
    const sut = makeSut()
    const input = { field: undefined }
    const result = sut.validate(input)

    expect(result).toStrictEqual(new InvalidFieldError('field', 'é obrigatório'))
  })

  it('should return undefined if field is defined', () => {
    const sut = makeSut()
    const input = { field: 'any_value' }
    const result = sut.validate(input)

    expect(result).toBeUndefined()
  })
})
