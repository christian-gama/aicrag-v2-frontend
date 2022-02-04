import { BaseSelectInput } from '@/components/atoms/BaseInput'
import { useControlSelectInput } from './hooks'

type ControlSelectInputProps = {
  options: Array<{ value: string, label: string }>
  onChange?: () => void
  defaultValue: string
  label: string
  name: string
}

/**
 * @description Must be used inside a Form component with FormProvider
 */
export const ControlSelectInput: React.FC<ControlSelectInputProps> = ({
  defaultValue,
  onChange,
  options,
  label,
  name
}: ControlSelectInputProps) => {
  const { onChangeHandler, value } = useControlSelectInput({
    defaultValue,
    onChange,
    name
  })

  return (
    <>
      <BaseSelectInput
        defaultValue={value[name] ?? undefined}
        onChange={onChangeHandler}
        value={value[name] ?? ''}
        options={options}
        label={label}
        name={name}
      />
    </>
  )
}
