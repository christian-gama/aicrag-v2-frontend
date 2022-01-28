import React from 'react'
import BaseInput from '../../atoms/BaseInput/BaseInput'
import EyeIcon from '../../atoms/icons/EyeIcon'
import useControlInput from './hooks/useControlInput'

type ControlInputProps = {
  type?: React.ComponentPropsWithRef<typeof BaseInput>['type']
  icon?: React.ReactElement
  defaultValue?: string
  label: string
  name: string
} & Pick<
React.InputHTMLAttributes<HTMLInputElement>,
'autoFocus' | 'onBlur' | 'onChange' | 'onFocus' | 'autoComplete'
>

/**
 * @description Must be used inside a Form component with FormProvider
 */
const ControlInput: React.FC<
Omit<ControlInputProps, 'uniqueFormName' | 'validation'>
> = ({
  autoComplete,
  defaultValue,
  autoFocus,
  onChange,
  onFocus,
  onBlur,
  label,
  icon,
  name,
  type
}: ControlInputProps) => {
  const {
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
  } = useControlInput({
    defaultValue,
    autoFocus,
    onChange,
    onFocus,
    onBlur,
    name,
    type
  })

  const shouldRenderIcon = type === 'password' || icon

  return (
    <BaseInput
      type={currentType[name] ?? 'text'}
      autoComplete={autoComplete}
      isFocused={isFocused[name]}
      isTouched={isTouched[name]}
      onChange={onChangeHandler}
      value={value[name] ?? ''}
      onFocus={onFocusHandler}
      isValid={isValid[name]}
      onBlur={onBlurHandler}
      readOnly={isReadOnly}
      autoFocus={autoFocus}
      validator={validator}
      error={error[name]}
      label={label}
      name={name}
      icon={
        shouldRenderIcon
          ? () => (
              <>
                {type !== 'password' && icon}
                {type === 'password' && (
                  <EyeIcon
                    showPassword={currentType[name] !== 'password'}
                    onClick={showPasswordHandler}
                  />
                )}
              </>
            )
          : undefined
      }
    />
  )
}

export default ControlInput
