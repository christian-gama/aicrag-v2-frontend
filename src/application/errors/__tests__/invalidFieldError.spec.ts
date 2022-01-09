import InvalidFieldError from '../invalidFieldError'

describe('InvalidInputError', () => {
  it('should be a class', () => {
    expect(typeof InvalidFieldError).toBe('function')
  })

  it('should extend Error', () => {
    expect(InvalidFieldError.prototype instanceof Error).toBe(true)
  })

  it('should have a name', () => {
    expect(new InvalidFieldError('field', 'reason').name).toBe('InvalidInputError')
  })

  it('should have a message', () => {
    expect(new InvalidFieldError('field', 'reason').message).toBe('Field inválido(a): reason')
  })

  it('should have a field', () => {
    expect(new InvalidFieldError('field', 'reason').field).toBe('field')
  })
})
