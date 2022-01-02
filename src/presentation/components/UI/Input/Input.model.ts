import IValidation from '@/domain/validation/validation.model'
import Maybe from '@/application/utils/typescript/maybe.model'

type InputProps = {
  name: string
  type: 'text' | 'email' | 'password' | 'number'
  error: Maybe<Error['message']>
  validator?: IValidation
  value: string
  isValid: boolean
  isTouched: boolean
  isFocused: boolean
  icon?: () => React.ReactNode
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
}

export default InputProps
