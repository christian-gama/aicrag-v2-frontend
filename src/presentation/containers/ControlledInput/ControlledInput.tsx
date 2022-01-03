import React, { useContext, useEffect } from 'react'
import FormContext from '@/application/models/context/form/FormContext'
import EyeIcon from '../../components/UI/icons/EyeIcon'
import Input from '../../components/UI/Input/Input'
import ControlledInputProps from './ControlledInput.model'
import onBlurHandler from './methods/onBlurHandler'
import onChangeHandler from './methods/onChangeHandler'
import onFocusHandler from './methods/onFocusHandler'

/**
 * @description Must be used inside a Form component with FormProvider
 */
const ControlledInput: React.FC<Omit<ControlledInputProps, 'uniqueFormName' | 'validation'>> = (
  props: ControlledInputProps
) => {
  const { icon, name, type } = props

  const { dispatch, state } = useContext(FormContext)

  const { data, validator } = state.form
  const { isTouched, currentType, error, isFocused, isValid, value } = state.input

  useEffect(() => {
    dispatch({ type: 'INPUT/SET_CURRENT_TYPE', payload: { currentType: { [name]: type ?? 'text' } } })
    dispatch({ type: 'INPUT/SET_IS_TOUCHED', payload: { isTouched: { [name]: false } } })
    dispatch({ type: 'INPUT/SET_ERROR', payload: { error: { [name]: undefined } } })
    dispatch({ type: 'INPUT/SET_IS_FOCUSED', payload: { isFocused: { [name]: false } } })
    dispatch({ type: 'INPUT/SET_IS_VALID', payload: { isValid: { [name]: false } } })
    dispatch({ type: 'INPUT/SET_VALUE', payload: { value: { [name]: '' } } })
  }, [])

  useEffect(() => {
    dispatch({ type: 'FORM/SET_FORM_DATA', payload: { data: { [name]: value } } })
  }, [])

  const showPasswordHandler = (): void =>
    currentType[name] === 'password'
      ? dispatch({ type: 'INPUT/SET_CURRENT_TYPE', payload: { currentType: { [name]: 'text' } } })
      : dispatch({ type: 'INPUT/SET_CURRENT_TYPE', payload: { currentType: { [name]: 'password' } } })

  const shouldRenderIcon = type === 'password' || icon

  return (
    <Input
      name={name}
      error={error[name]}
      isFocused={isFocused[name]}
      isTouched={isTouched[name]}
      isValid={isValid[name]}
      type={currentType[name]}
      validator={validator}
      value={value[name] ?? ''}
      onBlur={(event) =>
        onBlurHandler({
          dispatch,
          event,
          data,
          validator,
          ...props
        })
      }
      onChange={(event) =>
        onChangeHandler({
          dispatch,
          event,
          data,
          isTouched: isTouched[name],
          validator,
          ...props
        })
      }
      onFocus={(event) => onFocusHandler({ event, dispatch, validator, ...props, data })}
      icon={
        shouldRenderIcon
          ? () => (
              <>
                {type !== 'password' && icon}
                {type === 'password' && (
                  <EyeIcon showPassword={currentType[name] !== 'password'} onClick={showPasswordHandler} />
                )}
              </>
            )
          : undefined
      }
    />
  )
}

export default ControlledInput
