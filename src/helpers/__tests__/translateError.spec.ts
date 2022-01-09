import translateInputName from '../translateInputName'

const translateError = (error: any) => {
  if (typeof error !== 'string') return error

  let field = error.split(':')

  if (field.length > 1) {
    const newError = error.replace(field[1].trim(), translateInputName(field[1].trim()))

    if (newError === error) {
      field = error.split(' ')

      if (field.length > 1) {
        return error.replace(field[0].trim(), translateInputName(field[0].trim()))
      }
    }

    return newError
  }

  return error
}

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
    expect(translateError('Name inválido: reason')).toBe('Nome inválido: reason')
    expect(translateError('Parâmetro inválido: name')).toBe('Parâmetro inválido: Nome')
  })
})
