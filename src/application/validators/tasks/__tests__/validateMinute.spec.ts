import InvalidInputError from '@/application/errors/invalidInputError'
import validateMinute from '../validateMinute'

describe('validateMinute', () => {
  describe('failure', () => {
    it('should return an InvalidInputError if the value does not match numbers', () => {
      expect(validateMinute('a')).toBeInstanceOf(InvalidInputError)
    })

    it('should return an InvalidInputError if the minute is greater than 59', () => {
      expect(validateMinute('60')).toBeInstanceOf(InvalidInputError)
    })

    it('should return an InvalidInputError if the minute is lesser than 0', () => {
      expect(validateMinute('-1')).toBeInstanceOf(InvalidInputError)
    })
  })

  describe('success', () => {
    it('should return undefined if succeeds', () => {
      expect(validateMinute('0')).toBeUndefined()
    })
  })
})
