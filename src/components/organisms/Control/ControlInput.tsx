import React from 'react'
import BaseInput from '../../atoms/BaseInput/BaseInput'
import EyeIcon from '../../atoms/icons/EyeIcon'
import useControlInput from './hooks/useControlInput'

type ControlInputProps = {
  icon?: React.ReactElement
  name: string
  label: string
  defaultValue?: string
  type?: React.ComponentPropsWithRef<typeof BaseInput>['type']
} & Pick<
React.InputHTMLAttributes<HTMLInputElement>,
'autoFocus' | 'onBlur' | 'onChange' | 'onFocus' | 'autoComplete' | 'readOnly'
>

/**
 * @description Must be used inside a Form component with FormProvider
 */
const ControlInput: React.FC<
Omit<ControlInputProps, 'uniqueFormName' | 'validation'>
> = ({
  icon,
  name,
  type,
  autoFocus,
  label,
  autoComplete,
  defaultValue,
  onBlur,
  onChange,
  onFocus,
  readOnly
}: ControlInputProps) => {
  const {
    currentType,
    error,
    isFocused,
    isReadOnly,
    isTouched,
    isValid,
    onBlurHandler,
    onChangeHandler,
    onFocusHandler,
    showPasswordHandler,
    validator,
    value
  } = useControlInput({
    label,
    name,
    autoFocus,
    defaultValue,
    icon,
    onBlur,
    onChange,
    onFocus,
    readOnly,
    type
  })

  const shouldRenderIcon = type === 'password' || icon

  return (
    <BaseInput
      readOnly={isReadOnly}
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
      type={currentType[name] ?? 'text'}
      validator={validator}
      value={value[name] ?? ''}
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
