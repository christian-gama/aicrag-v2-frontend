export class NetworkError extends Error {
  constructor () {
    super('Houve um erro inesperado de conexão')

    this.name = 'networkError'
  }
}
