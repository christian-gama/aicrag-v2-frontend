import Maybe from '@/helpers/typescript/maybe.model'
import IValidation from '@/services/validators/protocols/validation.model'

type BaseInputProps = {
  error?: Maybe<Error['message']>
  isFocused?: boolean
  isTouched?: boolean
  isValid?: boolean
  label: string
  name: string
  validator?: IValidation
  icon?: () => React.ReactNode
} & React.InputHTMLAttributes<HTMLInputElement>

export default BaseInputProps
