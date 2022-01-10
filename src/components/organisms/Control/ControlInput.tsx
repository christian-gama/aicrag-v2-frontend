import React from 'react'
import BaseInput from '../../atoms/BaseInput/BaseInput'
import EyeIcon from '../../atoms/icons/EyeIcon'
import useControlInput from './hooks/useControlInput'
import ControlInputProps from './protocols/ControlInput.model'

/**
 * @description Must be used inside a Form component with FormProvider
 */
const ControlInput: React.FC<Omit<ControlInputProps, 'uniqueFormName' | 'validation'>> = (props: ControlInputProps) => {
  const { icon, name, type, autoFocus, label } = props

  const {
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
  } = useControlInput(props)

  const shouldRenderIcon = type === 'password' || icon

  return (
    <BaseInput
      autoFocus={autoFocus}
      error={error[name]}
      isFocused={isFocused[name]}
      isTouched={isTouched[name]}
      isValid={isValid[name]}
      label={label}
      name={name}
      onBlur={onBlurHandler}
      onChange={onChangeHandler}
      onFocus={onFocusHandler}
      type={currentType[name]}
      validator={validator}
      value={value[name] ?? ''}
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

export default ControlInput
