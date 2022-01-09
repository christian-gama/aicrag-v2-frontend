import Maybe from '@/helpers/typescript/maybe.model'

interface IFieldValidation {
  field: string
  validate: (input: object) => Maybe<Error>
}

export default IFieldValidation
