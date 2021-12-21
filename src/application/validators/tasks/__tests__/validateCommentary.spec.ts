import faker from 'faker'
import validateCommentary from '../validateCommentary'

describe('validateCommentary', () => {
  describe('failure', () => {
    it('should return the correct result if commentary has more than 400 characters', () => {
      const commentary = faker.lorem.words(401)
      const result = validateCommentary(commentary)

      expect(result).toStrictEqual({
        field: 'commentary',
        isValid: false,
        error: 'A observação deve ter no máximo 400 caractéres.'
      })
    })
  })

  describe('success', () => {
    it('should return the correct result if commentary has less than 400 characters', () => {
      const commentary = faker.lorem.words(1)
      const result = validateCommentary(commentary)

      expect(result).toStrictEqual({
        field: 'commentary',
        isValid: true,
        error: ''
      })
    })
  })
})
