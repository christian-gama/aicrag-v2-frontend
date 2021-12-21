interface IValidator {
  validate: (value: string) => IValidatorResult
}

interface IValidatorResult {
  isValid: boolean
  error: string
}

export default IValidator
