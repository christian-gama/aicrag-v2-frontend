import { NetworkError } from '..'

describe('InvalidInputError', () => {
  it('is a class', () => {
    expect(typeof NetworkError).toBe('function')
  })

  it('extends Error', () => {
    expect(NetworkError.prototype instanceof Error).toBe(true)
  })

  it('has a message', () => {
    expect(new NetworkError().message).toBe(
      'Houve um erro inesperado de conexão'
    )
  })
})
