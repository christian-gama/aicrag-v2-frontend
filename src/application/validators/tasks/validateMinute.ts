import InvalidInputError from '@/application/errors/invalidInputError'
import IValidator from '../protocols/validator.model'

const validateMinute: IValidator = (value) => {
  if (isNaN(+value)) return new InvalidInputError('minuto', 'deve ser um número')
  if (+value > 59) return new InvalidInputError('minuto', 'deve ser menor ou igual a 59')
  if (+value < 0) return new InvalidInputError('minuto', 'deve ser maior ou igual a 0')
}

export default validateMinute
