import { ComponentPropsWithRef, useContext, useEffect } from 'react'
import { FormContext } from '@/context/models/form'
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
  const { dispatch, state } = useContext(FormContext)

  const { isResetting } = state.form
  const { value } = state.input

  useEffect(() => {
    dispatch({
      type: 'INPUT/SET_CURRENT_TYPE',
      payload: { currentType: { [name]: 'text' } }
    })
    dispatch({
      type: 'INPUT/SET_ERROR',
      payload: { error: { [name]: undefined } }
    })
    dispatch({
      type: 'INPUT/SET_IS_FOCUSED',
      payload: { isFocused: { [name]: false } }
    })
    dispatch({
      type: 'INPUT/SET_IS_TOUCHED',
      payload: { isTouched: { [name]: false } }
    })
    dispatch({
      type: 'INPUT/SET_IS_VALID',
      payload: { isValid: { [name]: true } }
    })
    dispatch({
      type: 'INPUT/SET_VALUE',
      payload: {
        value: {
          [name]: defaultValue
        }
      }
    })
  }, [isResetting])

  useEffect(() => {
    dispatch({
      type: 'FORM/SET_FORM_DATA',
      payload: { data: { [name]: defaultValue } }
    })
  }, [isResetting])

  const onChangeHandler = (event: any) => {
    const value = event.target.value

    onChange?.()

    dispatch({
      type: 'INPUT/SET_IS_TOUCHED',
      payload: { isTouched: { [name]: true } }
    })
    dispatch({
      type: 'FORM/SET_FORM_DATA',
      payload: { data: { [name]: value } }
    })
    dispatch({
      type: 'INPUT/SET_VALUE',
      payload: { value: { [name]: value } }
    })
  }

  return {
    onChangeHandler,
    value
  }
}
