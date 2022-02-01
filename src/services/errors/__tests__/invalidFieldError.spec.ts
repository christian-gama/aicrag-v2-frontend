import { InvalidFieldError } from '..'

describe('InvalidInputError', () => {
  it('is a class', () => {
    expect(typeof InvalidFieldError).toBe('function')
  })

  it('extends Error', () => {
    expect(InvalidFieldError.prototype instanceof Error).toBe(true)
  })

  it('has a name', () => {
    expect(new InvalidFieldError('field', 'reason').name).toBe(
      'InvalidInputError'
    )
  })

  it('has a message', () => {
    expect(new InvalidFieldError('field', 'reason').message).toBe(
      'Field inválido(a): reason'
    )
  })

  it('has a field', () => {
    expect(new InvalidFieldError('field', 'reason').field).toBe('field')
  })
})
