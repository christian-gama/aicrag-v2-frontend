import { ComponentPropsWithRef, useContext, useEffect, useState } from 'react'
import validateInput from '@/helpers/validateInput'
import FormContext from '@/context/models/form/form.context'
import ControlInput from '../ControlInput'

type ControlInputProps = ComponentPropsWithRef<typeof ControlInput>

type UseControlInput = {
  defaultValue: ControlInputProps['defaultValue']
  autoFocus: ControlInputProps['autoFocus']
  onChange: ControlInputProps['onChange']
  onFocus: ControlInputProps['onFocus']
  onBlur: ControlInputProps['onBlur']
  name: ControlInputProps['name']
  type: ControlInputProps['type']
}

const useControlInput = ({
  defaultValue,
  autoFocus,
  onChange,
  onFocus,
  onBlur,
  name,
  type
}: UseControlInput) => {
  const { dispatch, state } = useContext(FormContext)

  const { validator, isResetting } = state.form
  const { isTouched, currentType, error, isFocused, isValid, value } =
    state.input

  const [isReadOnly, setIsReadOnly] = useState(true)

  useEffect(() => {
    dispatch({
      type: 'INPUT/SET_CURRENT_TYPE',
      payload: { currentType: { [name]: type ?? 'text' } }
    })
    dispatch({
      type: 'INPUT/SET_ERROR',
      payload: { error: { [name]: undefined } }
    })
    dispatch({
      type: 'INPUT/SET_IS_FOCUSED',
      payload: { isFocused: { [name]: !!autoFocus } }
    })
    dispatch({
      type: 'INPUT/SET_IS_TOUCHED',
      payload: { isTouched: { [name]: false } }
    })
    dispatch({
      type: 'INPUT/SET_IS_VALID',
      payload: { isValid: { [name]: false } }
    })
    dispatch({
      type: 'INPUT/SET_VALUE',
      payload: { value: { [name]: defaultValue ?? '' } }
    })
  }, [isResetting])

  useEffect(() => {
    dispatch({
      type: 'FORM/SET_FORM_DATA',
      payload: { data: { [name]: value[name] } }
    })
  }, [isResetting])

  const showPasswordHandler = (): void => {
    currentType[name] === 'password'
      ? dispatch({
        type: 'INPUT/SET_CURRENT_TYPE',
        payload: { currentType: { [name]: 'text' } }
      })
      : dispatch({
        type: 'INPUT/SET_CURRENT_TYPE',
        payload: { currentType: { [name]: 'password' } }
      })
  }

  const onBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value
    const error = validateInput({ state, name, value })

    dispatch({
      type: 'INPUT/SET_IS_FOCUSED',
      payload: { isFocused: { [name]: false } }
    })
    dispatch({
      type: 'INPUT/SET_IS_TOUCHED',
      payload: { isTouched: { [name]: true } }
    })
    dispatch({
      type: 'INPUT/SET_ERROR',
      payload: { error: { [name]: error } }
    })
    dispatch({
      type: 'FORM/SET_FORM_DATA',
      payload: { data: { [name]: value } }
    })

    if (onBlur) onBlur(event)
  }

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    const error = validateInput({ state, name, value })

    dispatch({
      type: 'INPUT/SET_VALUE',
      payload: { value: { [name]: value } }
    })
    dispatch({
      type: 'INPUT/SET_IS_VALID',
      payload: { isValid: { [name]: !error } }
    })
    dispatch({
      type: 'FORM/SET_FORM_DATA',
      payload: { data: { [name]: value } }
    })

    if (isTouched[name]) {
      dispatch({
        type: 'INPUT/SET_ERROR',
        payload: { error: { [name]: error } }
      })
    }

    if (onChange) onChange(event)
  }

  const onFocusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsReadOnly(false)

    const value = event.currentTarget.value
    const error = validateInput({ state, name, value })

    dispatch({
      type: 'INPUT/SET_IS_FOCUSED',
      payload: { isFocused: { [name]: true } }
    })
    dispatch({
      type: 'INPUT/SET_IS_VALID',
      payload: { isValid: { [name]: !error } }
    })
    dispatch({
      type: 'FORM/SET_FORM_DATA',
      payload: { data: { [name]: value } }
    })

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

export default useControlInput
