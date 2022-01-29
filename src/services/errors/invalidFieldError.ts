import { capitalize } from '@/helpers'

export class InvalidFieldError extends Error {
  constructor (
    public readonly field: string,
    protected readonly reason: string
  ) {
    super(`${capitalize(field)} inválido(a): ${reason}`)

    this.name = 'InvalidInputError'
  }
}
