export class InternalError extends Error {
  constructor () {
    super('Algo deu errado, tente novamente mais tarde')

    this.name = 'InternalError'
  }
}
