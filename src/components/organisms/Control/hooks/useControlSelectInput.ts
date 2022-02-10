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
      setFormIsDirty,
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
    setInputValue(name, defaultValue)
    setInputError(name, undefined)
    setInputIsFocused(name, false)
    setInputIsTouched(name, false)
    setInputIsValid(name, true)
  }, [isResetting])

  useEffect(() => {
    setFormData(name, defaultValue)
  }, [isResetting, defaultValue])

  const onChangeHandler = (event: any) => {
    const value = event.target.value

    onChange?.()

    setInputIsTouched(name, true)
    setInputValue(name, value)
    setFormData(name, value)
    setFormIsDirty(true)
  }

  return {
    onChangeHandler,
    value
  }
}
