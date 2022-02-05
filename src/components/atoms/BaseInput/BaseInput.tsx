import { Maybe, translateError } from '@/helpers'
import { IValidation } from '@/services/validators'
import * as classes from './stylesheet'

type BaseInputProps = {
  type?: 'email' | 'password' | 'text' | 'number' | 'search' | 'textArea'
  error?: Maybe<Error['message']>
  icon?: () => React.ReactNode
  validator?: IValidation
  isFocused?: boolean
  isTouched?: boolean
  required?: boolean
  isValid?: boolean
  value?: string
  label: string
  name: string
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'value'>

export const BaseInput: React.FC<BaseInputProps> = ({
  isFocused,
  isTouched,
  validator,
  required,
  isValid,
  error,
  label,
  value,
  icon,
  name,
  type,
  ...rest
}) => {
  const getState = (): classes.LabelRecipeVariants['state'] => {
    if (validator) {
      if (!isValid && isTouched) {
        if (!required && !value) {
          return 'default'
        }

        return 'error'
      }

      if (isValid) {
        if (!required && !value) {
          return 'default'
        }

        return 'success'
      }
    }

    return 'default'
  }

  const labelStyle = classes.labelRecipe({
    float: !!isFocused || value !== '',
    state: getState()
  })

  const inputStyle = classes.inputRecipe({
    hasIcon: !!icon || type === 'password',
    textArea: type === 'textArea',
    state: getState()
  })

  const renderInput = () => {
    if (type === 'textArea') {
      return (
        <textarea
          data-testid={'base-textarea-input'}
          onChange={rest.onChange as any}
          onFocus={rest.onFocus as any}
          onBlur={rest.onBlur as any}
          maxLength={rest.maxLength}
          minLength={rest.minLength}
          className={inputStyle}
          value={value}
          name={name}
          id={name}
        />
      )
    }

    return (
      <>
        <input
          {...rest}
          className={inputStyle}
          data-testid={'base-input'}
          id={name}
          name={name}
          type={type}
          value={value}
          placeholder=" "
        />

        {icon && (
          <div data-testid={'base-input-icon'} className={classes.inputIcon}>
            {icon()}
          </div>
        )}
      </>
    )
  }

  return (
    <div className={classes.input} data-testid={'base-input-wrapper'}>
      <div className={classes.inputContent}>
        <label
          data-testid={'base-input-label'}
          htmlFor={name}
          className={labelStyle}
        >
          {label}
        </label>

        <div className={classes.inputBox}>{renderInput()}</div>
      </div>

      {error && (
        <div data-testid={'base-input-error'} className={classes.inputError}>
          {translateError(error)}
        </div>
      )}
    </div>
  )
}
