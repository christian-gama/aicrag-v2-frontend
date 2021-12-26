import InvalidInputError from '@/application/errors/invalidInputError'
import validateHour from '../validateHour'

describe('validateHour', () => {
  describe('failure', () => {
    it('should return an InvalidInputError if the value does not match numbers', () => {
      expect(validateHour('a')).toBeInstanceOf(InvalidInputError)
    })

    it('should return an InvalidInputError if the minute is greater than 24', () => {
      expect(validateHour('24')).toBeInstanceOf(InvalidInputError)
    })

    it('should return an InvalidInputError if the minute is lesser than 0', () => {
      expect(validateHour('-1')).toBeInstanceOf(InvalidInputError)
    })
  })

  describe('success', () => {
    it('should return undefined if succeeds', () => {
      expect(validateHour('0')).toBeUndefined()
    })
  })
})
