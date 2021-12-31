import { useState } from 'react'
import Maybe from '@/application/utils/typescript/maybe.model'
import ControlledInputProps from './ControlledInput.model'

const initialValue = {
  currentType: 'text' as NonNullable<ControlledInputProps['type']>,
  error: undefined as Maybe<string>,
  isFocused: false,
  isTouched: false,
  isValid: false,
  value: ''
}

const useInput = (init: Pick<typeof initialValue, 'currentType'>) => {
  const [currentType, setCurrentType] = useState(init.currentType)

  const [error, setError] = useState(initialValue.error)

  const [isFocused, setIsFocused] = useState(initialValue.isFocused)

  const [isTouched, setIsTouched] = useState(initialValue.isTouched)

  const [isValid, setIsValid] = useState(initialValue.isValid)

  const [value, setValue] = useState(initialValue.value)

  const setOnBlur = (error: Maybe<string>) => {
    setIsFocused(false)
    setIsTouched(true)
    setError(error)
  }

  const setOnFocus = (error: Maybe<string>) => {
    setIsFocused(true)
    setIsValid(!error)
  }

  const setOnChange = (error: Maybe<string>, value: string) => {
    setValue(value)
    setIsValid(!error)

    if (isTouched) setError(error)
  }

  const reset = () => {
    setCurrentType(init.currentType)
    setError(initialValue.error)
    setIsFocused(initialValue.isFocused)
    setIsTouched(initialValue.isTouched)
    setIsValid(initialValue.isValid)
    setValue(initialValue.value)
  }

  return {
    currentType,
    error,
    isFocused,
    isTouched,
    isValid,
    reset,
    setCurrentType,
    setError,
    setOnBlur,
    setOnChange,
    setOnFocus,
    setValue,
    value
  }
}

export default useInput
