import { Maybe } from '@/helpers'

export type IFieldValidation = {
  field: string
  validate: (input: object) => Maybe<Error>
}
