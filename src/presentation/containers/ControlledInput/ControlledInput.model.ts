import Optional from '@/application/utils/typescript/optional.model'

type ControlledInputProps = {
  autoFocus?: boolean
  icon?: React.ReactElement
  name: string
  label: string
  defaultValue?: string
} & Pick<
React.InputHTMLAttributes<HTMLInputElement>,
Optional<'autoFocus' | 'onBlur' | 'onChange' | 'onFocus' | 'defaultValue' | 'type'>
>

export default ControlledInputProps
