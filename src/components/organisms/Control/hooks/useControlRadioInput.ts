import { ComponentPropsWithRef, useEffect } from 'react'
import { useForm } from '@/context/models/form'
import { ControlRadioInput } from '..'

type ControlRadioInputProps = ComponentPropsWithRef<typeof ControlRadioInput>

type UseControlRadioInput = {
  onChange: ControlRadioInputProps['onChange']
  value: ControlRadioInputProps['value']
  name: ControlRadioInputProps['name']
}

export const useControlRadioInput = ({
  onChange,
  value,
  name
}: UseControlRadioInput) => {
  const {
    formActions: {
      setInputIsTouched,
      setInputIsFocused,
      setInputIsValid,
      setInputError,
      setInputValue,
      setFormData
    },
    state: {
      form: { isResetting }
    }
  } = useForm()

  useEffect(() => {
    setInputError(name, undefined)
    setInputIsFocused(name, false)
    setInputIsTouched(name, false)
    setInputIsValid(name, false)
    setInputValue(name, value)
  }, [isResetting])

  const onChangeHandler = async (event: any) => {
    onChange(event)
    const value = event.target.value

    setInputIsTouched(name, true)
    setInputValue(name, value)
    setFormData(name, value)
  }

  return {
    onChangeHandler
  }
}
