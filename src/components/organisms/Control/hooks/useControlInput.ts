import { useForm } from '@/context/models/form'
import { validateInput } from '@/helpers'
import { ComponentPropsWithRef, useState, useEffect } from 'react'
import { ControlInput } from '..'

type ControlInputProps = ComponentPropsWithRef<typeof ControlInput>

type UseControlInput = {
  defaultValue: ControlInputProps['defaultValue']
  autoFocus: ControlInputProps['autoFocus']
  onChange: ControlInputProps['onChange']
  onFocus: ControlInputProps['onFocus']
  onBlur: ControlInputProps['onBlur']
  readOnly: ControlInputProps['readOnly']
  name: ControlInputProps['name']
  type: ControlInputProps['type']
}

export const useControlInput = ({
  defaultValue,
  autoFocus,
  readOnly,
  onChange,
  onFocus,
  onBlur,
  name,
  type
}: UseControlInput) => {
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
    form: { validator, isResetting },
    input: { isTouched, currentType, error, isFocused, isValid, value }
  } = state

  const [isReadOnly, setIsReadOnly] = useState(true)

  useEffect(() => {
    setInputCurrentType(name, type ?? 'text')
    setInputError(name, undefined)
    setInputIsFocused(name, !!autoFocus)
    setInputIsTouched(name, false)
    setInputIsValid(name, false)
    setInputValue(name, defaultValue ?? '')
  }, [isResetting, defaultValue])

  useEffect(() => {
    setFormData(name, value[name])
  }, [isResetting, value])

  const showPasswordHandler = (): void => {
    currentType[name] === 'password'
      ? setInputCurrentType(name, 'text')
      : setInputCurrentType(name, 'password')
  }

  const onBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value
    const error = validateInput({ state, name, value })

    setInputIsFocused(name, false)
    setFormIsDirty(true)
    setInputIsTouched(name, true)
    setInputIsValid(name, !error)
    setInputError(name, error)
    setFormData(name, value)

    if (onBlur) onBlur(event)
  }

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    const error = validateInput({ state, name, value })

    setInputValue(name, value)
    setInputIsValid(name, !error)
    setFormData(name, value)

    if (isTouched[name]) {
      setInputError(name, error)
    }

    if (onChange) onChange(event)
  }

  const onFocusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!readOnly) setIsReadOnly(false)

    setInputIsFocused(name, true)

    if (onFocus) onFocus(event)
  }

  return {
    showPasswordHandler,
    onChangeHandler,
    onFocusHandler,
    onBlurHandler,
    currentType,
    isReadOnly,
    isFocused,
    isTouched,
    validator,
    isValid,
    error,
    value
  }
}
