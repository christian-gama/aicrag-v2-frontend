import capitalize from '@/utils/capitalize'

class InvalidInputError extends Error {
  public readonly

  constructor (public readonly field: string, protected readonly reason: string) {
    super(`${capitalize(field)} inválido: ${reason}.`)

    this.name = 'InvalidInputError'
  }
}

export default InvalidInputError