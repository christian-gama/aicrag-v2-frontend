import capitalize from '@/application/utils/capitalize'

class InvalidFieldError extends Error {
  constructor (public readonly field: string, protected readonly reason: string) {
    super(`${capitalize(field)} inválido: ${reason}.`)

    this.name = 'InvalidInputError'
  }
}

export default InvalidFieldError
