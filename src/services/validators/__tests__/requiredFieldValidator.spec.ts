import InvalidFieldError from '@/services/errors/invalidFieldError'
import IFieldValidation from '@/services/validators/protocols/fieldValidation.model'
import RequiredFieldValidator from '../requiredFieldValidator'

const makeSut = (): IFieldValidation => {
  return new RequiredFieldValidator('field')
}

describe('requiredFieldValidator', () => {
  it('returns an InvalidFieldError if field is not defined', () => {
    const sut = makeSut()
    const input = { field: undefined }

    const result = sut.validate(input)

    expect(result).toStrictEqual(
      new InvalidFieldError('field', 'é obrigatório')
    )
  })

  it('returns undefined if field is defined', () => {
    const sut = makeSut()
    const input = { field: 'any_value' }

    const result = sut.validate(input)

    expect(result).toBeUndefined()
  })
})
