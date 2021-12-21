import IValidator from '@/domain/validators/validator.model'

const validateCommentary = (value: string): IValidator => {
  if (value.length > 400) {
    return { field: 'commentary', isValid: false, error: 'A observação deve ter no máximo 400 caracteres.' }
  }

  return { field: 'commentary', isValid: true, error: '' }
}

export default validateCommentary
