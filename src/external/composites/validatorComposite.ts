import Maybe from '@/helpers/typescript/maybe.model'
import IFieldValidation from '@/domain/validation/fieldValidation.model'
import IValidation from '@/domain/validation/validation.model'

class ValidatorComposite implements IValidation {
  constructor (private readonly validators: IFieldValidation[]) {}

  static build (validators: IFieldValidation[]): ValidatorComposite {
    return new ValidatorComposite(validators)
  }

  validate (field: string, input: Record<string, any>): Maybe<Error['message']> {
    const validators = this.validators.filter((validator) => validator.field === field)

    for (const validator of validators) {
      const error = validator.validate(input)

      if (error) {
        return error.message
      }
    }
  }
}

export default ValidatorComposite
