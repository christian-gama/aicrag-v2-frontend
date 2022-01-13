class NetworkError extends Error {
  constructor () {
    super('Houve um erro inesperado de conexão')

    this.name = 'networkError'
  }
}

export default NetworkError
