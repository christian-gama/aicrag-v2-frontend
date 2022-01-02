type ControlledInputProps = {
  icon?: React.ReactElement
  name: string
  type?: 'text' | 'email' | 'password' | 'number'

  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
}

export default ControlledInputProps
