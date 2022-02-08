import {
  EmailValidator,
  IsNumberValidator,
  MaxValidator,
  MaxLengthValidator,
  MinValidator,
  MinLengthValidator,
  RequiredFieldValidator,
  CompareFieldsValidator,
  Regex,
  TestValidator
} from '@/services/validators'
import { ValidatorBuilder } from '..'

describe('ValidatorBuilder', () => {
  it('returns a new instance when using field method', () => {
    const result = ValidatorBuilder.field('any_field')

    expect(result).toBeInstanceOf(ValidatorBuilder)
  })

  it('returns an array including all chained methods', () => {
    const fn = (field: string, input: Record<string, any>) => {
      return undefined
    }

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
      .test(fn)
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
      new Regex('any_field', /^[a-z]$/),
      new TestValidator('any_field', fn)
    ])
  })
})
