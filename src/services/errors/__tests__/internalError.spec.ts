import InternalError from '../internalError'

describe('InvalidInputError', () => {
  it('should be a class', () => {
    expect(typeof InternalError).toBe('function')
  })

  it('should extend Error', () => {
    expect(InternalError.prototype instanceof Error).toBe(true)
  })

  it('should have a message', () => {
    expect(new InternalError().message).toBe(
      'Algo deu errado, tente novamente mais tarde'
    )
  })
})
