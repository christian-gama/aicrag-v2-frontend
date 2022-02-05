import { BaseInput } from '@/components/atoms/BaseInput'
import { EyeIcon } from '@/components/utils/icons'
import { useControlInput } from './hooks'

type ControlInputProps = {
  type?: React.ComponentPropsWithRef<typeof BaseInput>['type']
  icon?: React.ReactElement
  defaultValue?: string
  required?: boolean
  label: string
  name: string
} & Pick<
React.InputHTMLAttributes<HTMLInputElement>,
| 'autoComplete'
| 'autoFocus'
| 'maxLength'
| 'minLength'
| 'onChange'
| 'onFocus'
| 'onBlur'
| 'max'
| 'min'
| 'step'
>

/**
 * @description Must be used inside a Form component with FormProvider
 */
export const ControlInput: React.FC<
Omit<ControlInputProps, 'uniqueFormName' | 'validation'>
> = ({
  autoComplete,
  defaultValue,
  maxLength,
  minLength,
  autoFocus,
  required,
  onChange,
  onFocus,
  onBlur,
  label,
  icon,
  name,
  step,
  type,
  max,
  min
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
      maxLength={maxLength}
      minLength={minLength}
      required={required}
      error={error[name]}
      label={label}
      name={name}
      step={step}
      min={min}
      max={max}
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
