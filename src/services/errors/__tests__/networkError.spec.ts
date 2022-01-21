import NetworkError from '../connectionError'

describe('InvalidInputError', () => {
  it('should be a class', () => {
    expect(typeof NetworkError).toBe('function')
  })

  it('should extend Error', () => {
    expect(NetworkError.prototype instanceof Error).toBe(true)
  })

  it('should have a message', () => {
    expect(new NetworkError().message).toBe(
      'Houve um erro inesperado de conexão'
    )
  })
})
