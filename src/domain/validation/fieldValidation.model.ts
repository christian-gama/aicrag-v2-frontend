import Maybe from '@/application/utils/typescript/maybe.model'

interface IFieldValidation {
  field: string
  validate: (input: object) => Maybe<Error>
}

export default IFieldValidation
