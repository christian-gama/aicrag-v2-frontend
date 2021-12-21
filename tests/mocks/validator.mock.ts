import IValidator from '@/domain/validators/validator.model'

const validatorMock = (isValid: boolean) => {
  return (value: string): IValidator => ({
    field: 'commentary',
    error: isValid ? '' : 'Error',
    isValid
  })
}
export default validatorMock
