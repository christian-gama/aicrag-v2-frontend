import IValidation from '@/domain/validation/validation.model'
import Maybe from '@/application/utils/typescript/maybe.model'

type BaseInputProps = {
  error: Maybe<Error['message']>
  isFocused: boolean
  isTouched: boolean
  isValid: boolean
  label: string
  name: string
  validator?: IValidation
  icon?: () => React.ReactNode
} & React.InputHTMLAttributes<HTMLInputElement>

export default BaseInputProps
