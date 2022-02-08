import { ComponentPropsWithRef, useEffect } from 'react'
import { useForm } from '@/context/models/form'
import { ControlSelectInput } from '..'

type ControlSelectInputProps = ComponentPropsWithRef<typeof ControlSelectInput>

type UseControlSelectInput = {
  defaultValue: ControlSelectInputProps['defaultValue']
  onChange?: ControlSelectInputProps['onChange']
  name: ControlSelectInputProps['name']
}

export const useControlSelectInput = ({
  defaultValue,
  onChange,
  name
}: UseControlSelectInput) => {
  const {
    formActions: {
      setInputCurrentType,
      setInputIsFocused,
      setInputIsTouched,
      setInputIsValid,
      setInputError,
      setInputValue,
      setFormData
    },
    state
  } = useForm()

  const {
    form: { isResetting },
    input: { value }
  } = state

  useEffect(() => {
    setInputCurrentType(name, 'text')
    setInputError(name, undefined)
    setInputIsFocused(name, false)
    setInputIsTouched(name, false)
    setInputIsValid(name, true)
    setInputValue(name, defaultValue)
  }, [isResetting])

  useEffect(() => {
    setFormData(name, defaultValue)
  }, [isResetting, defaultValue])

  const onChangeHandler = (event: any) => {
    const value = event.target.value

    onChange?.()

    setInputIsTouched(name, true)
    setFormData(name, value)
    setInputValue(name, value)
  }

  return {
    onChangeHandler,
    value
  }
}
