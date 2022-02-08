import { DateTime } from 'luxon'
import { BaseDateInput } from '@/components/atoms/BaseInput'
import { Calendar } from '../Calendar'
import { useControlDateInput } from './hooks'

type ControlDateInputProps = {
  defaultDate?: number
  label: string
  name: string
} & Pick<React.InputHTMLAttributes<HTMLInputElement>, 'autoFocus'>

/**
 * @description Must be used inside a Form component with FormProvider
 */
export const ControlDateInput: React.FC<ControlDateInputProps> = ({
  defaultDate,
  autoFocus,
  label,
  name
}: ControlDateInputProps) => {
  const { isFocused, onBlurHandler, onFocusHandler, value } =
    useControlDateInput({
      defaultDate,
      autoFocus,
      name
    })

  return (
    <>
      <BaseDateInput
        isFocused={isFocused[name]}
        value={value[name] ?? ''}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        autoFocus={autoFocus}
        label={label}
        name={name}
      />

      <Calendar previousDate={defaultDate!} />
    </>
  )
}

ControlDateInput.defaultProps = {
  defaultDate: DateTime.now().toMillis()
}
