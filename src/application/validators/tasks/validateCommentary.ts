import { IValidator } from '@/domain/validators/validator.model'
import { InvalidInputError } from '@/application/errors/InvalidInputError'

export const validateCommentary = (value: string): IValidator => {
  if (value.length > 400) {
    return new InvalidInputError('observação', 'deve ter no máximo 400 caracteres')
  }
}
