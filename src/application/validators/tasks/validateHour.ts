import InvalidInputError from '@/application/errors/invalidInputError'
import IValidator from '../protocols/validator.model'

const validateHour: IValidator = (value) => {
  if (isNaN(+value)) return new InvalidInputError('hora', 'deve ser um número')
  if (+value > 23) return new InvalidInputError('hora', 'deve ser menor ou igual a 23')
  if (+value < 0) return new InvalidInputError('hora', 'deve ser maior ou igual a 0')
}

export default validateHour
