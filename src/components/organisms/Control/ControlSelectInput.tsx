import { BaseSelectInput } from '@/components/atoms/BaseInput'
import { useControlSelectInput } from './hooks'

type ControlSelectInputProps = {
  options: Array<{ value: string, label: string }>
  defaultValue: string
  label: string
  name: string
}

/**
 * @description Must be used inside a Form component with FormProvider
 */
export const ControlSelectInput: React.FC<ControlSelectInputProps> = ({
  defaultValue,
  options,
  label,
  name
}: ControlSelectInputProps) => {
  const { onChangeHandler, value } = useControlSelectInput({
    defaultValue,
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
