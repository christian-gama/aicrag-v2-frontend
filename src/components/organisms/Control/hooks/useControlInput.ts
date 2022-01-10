import { useContext, useEffect } from 'react'
import FormContext from '@/context/models/form/form.context'
import ControlInputProps from '../protocols/ControlInput.model'

const useControlInput = (props: ControlInputProps) => {
  const { dispatch, state } = useContext(FormContext)

  const { data, validator, isResetting } = state.form
  const { isTouched, currentType, error, isFocused, isValid, value } = state.input

  useEffect(() => {
    dispatch({ type: 'INPUT/SET_CURRENT_TYPE', payload: { currentType: { [props.name]: props.type ?? 'text' } } })
    dispatch({ type: 'INPUT/SET_ERROR', payload: { error: { [props.name]: undefined } } })
    dispatch({ type: 'INPUT/SET_IS_FOCUSED', payload: { isFocused: { [props.name]: !!props.autoFocus } } })
    dispatch({ type: 'INPUT/SET_IS_TOUCHED', payload: { isTouched: { [props.name]: false } } })
    dispatch({ type: 'INPUT/SET_IS_VALID', payload: { isValid: { [props.name]: false } } })
    dispatch({ type: 'INPUT/SET_VALUE', payload: { value: { [props.name]: props.defaultValue ?? '' } } })
  }, [isResetting])

  useEffect(() => {
    dispatch({ type: 'FORM/SET_FORM_DATA', payload: { data: { [props.name]: value } } })
  }, [isResetting])

  const showPasswordHandler = (): void => {
    currentType[props.name] === 'password'
      ? dispatch({ type: 'INPUT/SET_CURRENT_TYPE', payload: { currentType: { [props.name]: 'text' } } })
      : dispatch({ type: 'INPUT/SET_CURRENT_TYPE', payload: { currentType: { [props.name]: 'password' } } })
  }

  const onBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value
    const error = validator?.validate(props.name, { ...data, [props.name]: value })

    dispatch({ type: 'INPUT/SET_IS_FOCUSED', payload: { isFocused: { [props.name]: false } } })
    dispatch({ type: 'INPUT/SET_IS_TOUCHED', payload: { isTouched: { [props.name]: true } } })
    dispatch({ type: 'INPUT/SET_ERROR', payload: { error: { [props.name]: error } } })

    if (props.onBlur) props.onBlur(event)

    dispatch({ type: 'FORM/SET_FORM_DATA', payload: { data: { [props.name]: value } } })
    dispatch({ type: 'FORM/SET_IS_DIRTY', payload: { isDirty: true } })
    dispatch({ type: 'FORM/SET_IS_FOCUSED', payload: { isFocused: false } })
    dispatch({ type: 'FORM/SET_IS_CHANGING', payload: { isChanging: false } })
  }

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    const error = validator?.validate(props.name, { ...data, [props.name]: value })

    dispatch({ type: 'INPUT/SET_VALUE', payload: { value: { [props.name]: value } } })
    dispatch({ type: 'INPUT/SET_IS_VALID', payload: { isValid: { [props.name]: !error } } })

    if (isTouched[props.name]) dispatch({ type: 'INPUT/SET_ERROR', payload: { error: { [props.name]: error } } })

    if (props.onChange) props.onChange(event)

    dispatch({ type: 'FORM/SET_IS_CHANGING', payload: { isChanging: true } })
    dispatch({ type: 'FORM/SET_FORM_DATA', payload: { data: { [props.name]: value } } })
  }

  const onFocusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value
    const error = validator?.validate(props.name, { ...data, [props.name]: value })

    dispatch({ type: 'INPUT/SET_IS_FOCUSED', payload: { isFocused: { [props.name]: true } } })
    dispatch({ type: 'INPUT/SET_IS_VALID', payload: { isValid: { [props.name]: !error } } })

    if (props.onFocus) props.onFocus(event)

    dispatch({ type: 'FORM/SET_FORM_DATA', payload: { data: { [props.name]: value } } })
    dispatch({ type: 'FORM/SET_IS_FOCUSED', payload: { isFocused: true } })
  }

  return {
    currentType,
    error,
    isFocused,
    isTouched,
    isValid,
    onBlurHandler,
    onChangeHandler,
    onFocusHandler,
    showPasswordHandler,
    validator,
    value
  }
}

export default useControlInput
