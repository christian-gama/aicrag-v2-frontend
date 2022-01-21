import translateError from '../translateError'

describe('translateError', () => {
  it('should return the same error when it is not a string', () => {
    expect(translateError(null)).toBe(null)
    expect(translateError(undefined)).toBe(undefined)
    expect(translateError(true)).toBe(true)
    expect(translateError(false)).toBe(false)
    expect(translateError(123)).toBe(123)
    expect(translateError(NaN)).toBe(NaN)
  })

  it('should translate the error message when it is a string', () => {
    expect(translateError('field: reason')).toBe('field: reason')
    expect(translateError('Name inválido: reason')).toBe(
      'Nome inválido: reason'
    )
    expect(translateError('Parâmetro inválido: name')).toBe(
      'Parâmetro inválido: Nome'
    )
    expect(translateError('Parâmetro inválido: name, email')).toBe(
      'Parâmetro inválido: Nome, Email'
    )
    expect(translateError('O campo "passwordConfirmation" é inválido.')).toBe(
      'O campo "Confirmação de senha" é inválido.'
    )
  })
})
