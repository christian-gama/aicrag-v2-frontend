import InternalError from '../internalError'

describe('InvalidInputError', () => {
  it('is a class', () => {
    expect(typeof InternalError).toBe('function')
  })

  it('extends Error', () => {
    expect(InternalError.prototype instanceof Error).toBe(true)
  })

  it('has a message', () => {
    expect(new InternalError().message).toBe(
      'Algo deu errado, tente novamente mais tarde'
    )
  })
})
