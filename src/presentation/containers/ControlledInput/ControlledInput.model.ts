import IValidation from '@/domain/validation/validation.model'

type ControlledInputProps = {
  /**
   * @description Passed automatically by the parent Form component
   * @protected
   */
  uniqueFormName?: string

  /**
   * @description Passed automatically by the parent Form component
   * @protected
   */
  validation?: IValidation

  icon?: React.ReactElement
  name: string
  type?: 'text' | 'email' | 'password' | 'number'

  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
}

export default ControlledInputProps
