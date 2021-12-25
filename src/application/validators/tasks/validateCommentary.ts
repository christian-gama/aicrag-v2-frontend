import InvalidInputError from '@/application/errors/invalidInputError'
import IValidator from '../protocols/validator.model'

const validateCommentary: IValidator = (value) => {
  if (value.length > 400) {
    return new InvalidInputError('observação', 'deve ter no máximo 400 caracteres')
  }
}

export default validateCommentary
