import React from 'react'
import translateError from '@/helpers/translateError'
import Maybe from '@/helpers/typescript/maybe.model'
import IValidation from '@/services/validators/protocols/validation.model'
import * as style from './stylesheet'

type BaseInputProps = {
  type?: 'email' | 'password' | 'text' | 'number' | 'search'
  error?: Maybe<Error['message']>
  validator?: IValidation
  isFocused?: boolean
  isTouched?: boolean
  isValid?: boolean
  label: string
  name: string
  icon?: () => React.ReactNode
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>

const BaseInput: React.FC<BaseInputProps> = ({
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
  const getState = (): style.LabelRecipeVariants['state'] => {
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

  const labelStyle = style.labelRecipe({
    float: !!isFocused || value !== '',
    state: getState()
  })

  const inputStyle = style.inputRecipe({
    hasIcon: !!icon || type === 'password',
    state: getState()
  })

  return (
    <div className={style.input} data-testid={'base-input-wrapper'}>
      <div className={style.inputContent}>
        <label
          data-testid={'base-input-label'}
          htmlFor={name}
          className={labelStyle}
        >
          {label}
        </label>

        <div className={style.inputBox}>
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
            <div data-testid={'base-input-icon'} className={style.inputIcon}>
              {icon()}
            </div>
          )}
        </div>
      </div>

      {error && (
        <div data-testid={'base-input-error'} className={style.inputError}>
          {translateError(error)}
        </div>
      )}
    </div>
  )
}

export default BaseInput
