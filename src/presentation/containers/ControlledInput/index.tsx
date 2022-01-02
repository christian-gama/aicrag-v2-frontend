import React, { useContext, useEffect } from 'react'
import FormContext from '@/application/models/context/form/FormContext'
import EyeIcon from '../../components/UI/icons/EyeIcon'
import Input from '../../components/UI/Input'
import ControlledInputProps from './ControlledInput.model'
import onBlurHandler from './methods/onBlurHandler'
import onChangeHandler from './methods/onChangeHandler'
import onFocusHandler from './methods/onFocusHandler'
import useInput from './useInput'

/**
 * @description Must be used inside a Form component with FormProvider
 */
const ControlledInput: React.FC<Omit<ControlledInputProps, 'uniqueFormName' | 'validation'>> = (
  props: ControlledInputProps
) => {
  const { icon, name, type } = props

  const { dispatch, state } = useContext(FormContext)

  const { formData, isResetting, validator } = state

  const inputState = useInput({ currentType: type ?? 'text' })

  useEffect(() => {
    if (isResetting) inputState.reset()
  }, [isResetting])

  useEffect(() => {
    inputState.setCurrentType(type ?? 'text')
  }, [])

  const showPasswordHandler = (): void =>
    inputState.currentType === 'password' ? inputState.setCurrentType('text') : inputState.setCurrentType('password')

  const shouldRenderIcon = type === 'password' || icon

  return (
    <Input
      name={name}
      error={inputState.error}
      isFocused={inputState.isFocused}
      isTouched={inputState.isTouched}
      isValid={inputState.isValid}
      type={inputState.currentType}
      validator={validator}
      value={inputState.value}
      onBlur={(event) =>
        onBlurHandler({
          dispatch,
          event,
          formData,
          inputState,
          validator,
          ...props
        })
      }
      onChange={(event) =>
        onChangeHandler({
          dispatch,
          event,
          inputState,
          formData,
          validator,
          ...props
        })
      }
      onFocus={(event) => onFocusHandler({ event, dispatch, inputState, validator, ...props, formData })}
      icon={
        shouldRenderIcon
          ? () => (
              <>
                {type !== 'password' && icon}
                {type === 'password' && (
                  <EyeIcon showPassword={inputState.currentType !== 'password'} onClick={showPasswordHandler} />
                )}
              </>
            )
          : undefined
      }
    />
  )
}

export default ControlledInput
