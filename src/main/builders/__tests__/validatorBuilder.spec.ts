import CompareFieldsValidator from '@/application/validators/compareFieldsValidator'
import EmailValidator from '@/application/validators/emailValidator'
import IsNumberValidator from '@/application/validators/isNumberValidator'
import MaxLengthValidator from '@/application/validators/maxLengthValidator'
import MaxValidator from '@/application/validators/maxValidator'
import MinLengthValidator from '@/application/validators/minLengthValidator'
import MinValidator from '@/application/validators/minValidator'
import Regex from '@/application/validators/regex'
import RequiredFieldValidator from '@/application/validators/requiredFieldValidator'
import ValidatorBuilder from '../validatorBuilder'

const makeSut = () => {
  return ValidatorBuilder
}

describe('ValidatorBuilder', () => {
  it('should return a new instance of ValidatorBuilder when using field method', () => {
    const sut = makeSut()

    const result = sut.field('any_field')

    expect(result).toBeInstanceOf(ValidatorBuilder)
  })

  it('should return an array including all chained methods', () => {
    const sut = makeSut()

    const result = sut
      .field('any_field')
      .isEmail()
      .isNumber()
      .max(1)
      .maxLength(1)
      .min(1)
      .minLength(1)
      .required()
      .sameAs('another_field')
      .regex(/^[a-z]$/)
      .build()

    expect(result).toStrictEqual([
      new EmailValidator('any_field'),
      new IsNumberValidator('any_field'),
      new MaxValidator('any_field', 1),
      new MaxLengthValidator('any_field', 1),
      new MinValidator('any_field', 1),
      new MinLengthValidator('any_field', 1),
      new RequiredFieldValidator('any_field'),
      new CompareFieldsValidator('any_field', 'another_field'),
      new Regex('any_field', /^[a-z]$/)
    ])
  })
})
