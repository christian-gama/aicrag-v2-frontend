import Maybe from '@/helpers/typescript/maybe.model'

interface IValidation {
  validate: (field: string, input: Record<string, any>) => Maybe<Error['message']>
}

export default IValidation
