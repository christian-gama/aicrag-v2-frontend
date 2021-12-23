import { IValidator } from '@/domain/validators/validator.model'
import InvalidInputError from '@/application/errors/invalidInputError'

const validateCommentary = (value: string): IValidator => {
  if (value.length > 400) {
    return new InvalidInputError('observação', 'deve ter no máximo 400 caracteres')
  }
}

export default validateCommentary
