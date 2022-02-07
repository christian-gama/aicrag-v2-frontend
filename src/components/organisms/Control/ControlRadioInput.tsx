import { BaseRadioInput } from '@/components/atoms/BaseInput'
import { useControlRadioInput } from './hooks'

type ControlRadioInputProps = {
  checked?: boolean
  value: string
  label: string
  name: string
}

/**
 * @description Must be used inside a Form component with FormProvider
 */
export const ControlRadioInput: React.FC<ControlRadioInputProps> = ({
  checked,
  value,
  label,
  name
}: ControlRadioInputProps) => {
  const { onChangeHandler } = useControlRadioInput({
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
