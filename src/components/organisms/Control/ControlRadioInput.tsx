import { BaseRadioInput } from '@/components/atoms/BaseInput'
import { useControlRadioInput } from './hooks'

type ControlRadioInputProps = {
  onChange: (event: any) => void
  checked?: boolean
  value: string
  label: string
  name: string
}

/**
 * @description Must be used inside a Form component with FormProvider
 */
export const ControlRadioInput: React.FC<ControlRadioInputProps> = ({
  onChange,
  checked,
  value,
  label,
  name
}: ControlRadioInputProps) => {
  const { onChangeHandler } = useControlRadioInput({
    onChange,
    value,
    name
  })

  return (
    <>
      <BaseRadioInput
        onChange={onChangeHandler}
        checked={checked}
        value={value}
        label={label}
        name={name}
      />
    </>
  )
}
