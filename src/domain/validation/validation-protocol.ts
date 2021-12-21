interface IValidation {
  validate: (value: string) => IValidationResult
}

interface IValidationResult {
  isValid: boolean
  error: string
}

export default IValidation
