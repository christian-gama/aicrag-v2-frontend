import { Maybe } from '@/helpers'

export type IValidation = {
  validate: (
    field: string,
    input: Record<string, any>
  ) => Maybe<Error['message']>
}
