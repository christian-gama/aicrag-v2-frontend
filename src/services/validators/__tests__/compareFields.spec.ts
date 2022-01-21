import InvalidFieldError from '@/services/errors/invalidFieldError'
import IFieldValidation from '@/services/validators/protocols/fieldValidation.model'
import CompareFieldsValidator from '../compareFieldsValidator'

const makeSut = (): IFieldValidation => {
  return new CompareFieldsValidator('field', 'fieldToCompare')
}

describe('compareFieldsValidator', () => {
  it('should return an InvalidFieldError if field and fieldToCompare are not equal', () => {
    const sut = makeSut()
    const input = { field: 'a', fieldToCompare: 'b' }
    const result = sut.validate(input)

    expect(result).toStrictEqual(
      new InvalidFieldError('field', 'deve ser igual ao campo fieldToCompare')
    )
  })

  it('should return undefined if field and fieldToCompare are equal', () => {
    const sut = makeSut()
    const input = { field: 'a', fieldToCompare: 'a' }
    const result = sut.validate(input)

    expect(result).toBeUndefined()
  })
})
