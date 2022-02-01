import { Maybe, translateError } from '@/helpers'
import { IValidation } from '@/services/validators'
import * as classes from './stylesheet'

type BaseInputProps = {
  type?: 'email' | 'password' | 'text' | 'number' | 'search'
  error?: Maybe<Error['message']>
  icon?: () => React.ReactNode
  validator?: IValidation
  isFocused?: boolean
  isTouched?: boolean
  isValid?: boolean
  label: string
  name: string
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>

export const BaseInput: React.FC<BaseInputProps> = ({
  isFocused,
  isTouched,
  validator,
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
        return 'error'
      }

      if (isValid) {
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
    state: getState()
  })

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

        <div className={classes.inputBox}>
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
        </div>
      </div>

      {error && (
        <div data-testid={'base-input-error'} className={classes.inputError}>
          {translateError(error)}
        </div>
      )}
    </div>
  )
}
