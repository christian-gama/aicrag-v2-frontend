import faker from 'faker'
import InvalidInputError from '@/application/errors/invalidInputError'
import validateCommentary from '../validateCommentary'

describe('validateCommentary', () => {
  describe('failure', () => {
    it('should return the correct result if commentary has more than 400 characters', () => {
      const commentary = faker.lorem.words(401)
      const result = validateCommentary(commentary)

      expect(result).toStrictEqual(new InvalidInputError('observação', 'deve ter no máximo 400 caracteres'))
    })
  })

  describe('success', () => {
    it('should return the correct result if commentary has less than 400 characters', () => {
      const commentary = faker.lorem.words(1)
      const result = validateCommentary(commentary)

      expect(result).toBeUndefined()
    })

    it('should return the correct result if commentary is empty', () => {
      const commentary = ''
      const result = validateCommentary(commentary)

      expect(result).toBeUndefined()
    })
  })
})
