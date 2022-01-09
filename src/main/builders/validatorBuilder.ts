import IFieldValidation from '@/domain/validation/fieldValidation.model'
import CompareFieldsValidator from '@/application/validators/compareFieldsValidator'
import EmailValidator from '@/application/validators/emailValidator'
import IsNumberValidator from '@/application/validators/isNumberValidator'
import MaxLengthValidator from '@/application/validators/maxLengthValidator'
import MaxValidator from '@/application/validators/maxValidator'
import MinLengthValidator from '@/application/validators/minLengthValidator'
import MinValidator from '@/application/validators/minValidator'
import Regex from '@/application/validators/regex'
import RequiredFieldValidator from '@/application/validators/requiredFieldValidator'

class ValidatorBuilder {
  private constructor (private readonly field: string, private readonly validations: IFieldValidation[]) {}

  static field (field: string): ValidatorBuilder {
    return new ValidatorBuilder(field, [])
  }

  required (): ValidatorBuilder {
    this.validations.push(new RequiredFieldValidator(this.field))

    return this
  }

  isEmail (): ValidatorBuilder {
    this.validations.push(new EmailValidator(this.field))

    return this
  }

  min (min: number): ValidatorBuilder {
    this.validations.push(new MinValidator(this.field, min))

    return this
  }

  regex (regex: RegExp): ValidatorBuilder {
    this.validations.push(new Regex(this.field, regex))

    return this
  }

  max (max: number): ValidatorBuilder {
    this.validations.push(new MaxValidator(this.field, max))

    return this
  }

  minLength (minLength: number): ValidatorBuilder {
    this.validations.push(new MinLengthValidator(this.field, minLength))

    return this
  }

  maxLength (maxLength: number): ValidatorBuilder {
    this.validations.push(new MaxLengthValidator(this.field, maxLength))

    return this
  }

  isNumber (): ValidatorBuilder {
    this.validations.push(new IsNumberValidator(this.field))

    return this
  }

  sameAs (field: string): ValidatorBuilder {
    this.validations.push(new CompareFieldsValidator(this.field, field))

    return this
  }

  build (): IFieldValidation[] {
    return this.validations
  }
}

export default ValidatorBuilder
