import CompareFieldsValidator from '@/services/validators/compareFieldsValidator'
import EmailValidator from '@/services/validators/emailValidator'
import IsNumberValidator from '@/services/validators/isNumberValidator'
import MaxLengthValidator from '@/services/validators/maxLengthValidator'
import MaxValidator from '@/services/validators/maxValidator'
import MinLengthValidator from '@/services/validators/minLengthValidator'
import MinValidator from '@/services/validators/minValidator'
import Regex from '@/services/validators/regex'
import RequiredFieldValidator from '@/services/validators/requiredFieldValidator'
import ValidatorBuilder from '../validatorBuilder'

describe('ValidatorBuilder', () => {
  it('returns a new instance when using field method', () => {
    const result = ValidatorBuilder.field('any_field')

    expect(result).toBeInstanceOf(ValidatorBuilder)
  })

  it('returns an array including all chained methods', () => {
    const result = ValidatorBuilder.field('any_field')
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
