import { ComponentPropsWithRef, useContext, useEffect } from 'react'
import { FormContext } from '@/context/models/form'
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
  const { dispatch, state } = useContext(FormContext)

  const { isResetting } = state.form

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
          [name]: value
        }
      }
    })
  }, [isResetting])

  const onChangeHandler = async (event: any) => {
    onChange(event)
    const value = event.target.value

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
    onChangeHandler
  }
}
