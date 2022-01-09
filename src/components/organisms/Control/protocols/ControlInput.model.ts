import Optional from '@/helpers/typescript/optional.model'

type ControlInputProps = {
  autoFocus?: boolean
  icon?: React.ReactElement
  name: string
  label: string
  defaultValue?: string
} & Pick<
React.InputHTMLAttributes<HTMLInputElement>,
Optional<'autoFocus' | 'onBlur' | 'onChange' | 'onFocus' | 'defaultValue' | 'type'>
>

export default ControlInputProps
