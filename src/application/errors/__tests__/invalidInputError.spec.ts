import InvalidInputError from '../invalidInputError'

describe('InvalidInputError', () => {
  it('should be a class', () => {
    expect(typeof InvalidInputError).toBe('function')
  })

  it('should extend Error', () => {
    expect(InvalidInputError.prototype instanceof Error).toBe(true)
  })

  it('should have a name', () => {
    expect(new InvalidInputError('field', 'reason').name).toBe('InvalidInputError')
  })

  it('should have a message', () => {
    expect(new InvalidInputError('field', 'reason').message).toBe('Field inválido: reason.')
  })

  it('should have a field', () => {
    expect(new InvalidInputError('field', 'reason').field).toBe('field')
  })
})
