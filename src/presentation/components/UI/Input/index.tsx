import React from 'react'
import IValidation from '@/domain/validation/validation.model'
import Maybe from '@/application/utils/typescript/maybe.model'
import { inputClasses, LabelRecipeVariants } from './Input.css'

type InputProps = {
  name: string
  type: 'text' | 'email' | 'password' | 'number'
  error: Maybe<Error['message']>
  validation?: IValidation
  value: string
  isValid: boolean
  isTouched: boolean
  isFocused: boolean
  icon?: () => React.ReactNode
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
  showPasswordHandler?: () => void
  showPassword?: boolean
}

const Input: React.FC<InputProps> = (props) => {
  const { name, onBlur, onChange, onFocus, type, value, icon, isValid, isTouched, validation, error, isFocused } = props
  const { boxStyle, wrapperStyle, contentStyle, inputRecipe, labelRecipe, errorStyle, iconStyle } = inputClasses

  const getState = (): LabelRecipeVariants['state'] => {
    if (validation) {
      if (!isValid && isTouched) {
        return 'error'
      }

      if (isValid) {
        return 'success'
      }
    }

    return 'default'
  }

  const labelStyle = labelRecipe({
    float: !!isFocused || value !== '',
    state: getState()
  })

  const inputStyle = inputRecipe({
    hasIcon: !!icon || type === 'password',
    state: getState()
  })

  const uniqueId = `input-${name.toLowerCase()}-${Math.floor(Math.random() * 1000)}`

  return (
    <div className={wrapperStyle} data-testid={`${name}-container`}>
      <div className={contentStyle}>
        <label data-testid={`${name}-label`} htmlFor={uniqueId} className={labelStyle}>
          {name}
        </label>

        <div className={boxStyle}>
          <input
            className={inputStyle}
            data-testid={`${name}-input`}
            id={uniqueId}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            onFocus={onFocus}
            type={type}
            value={value}
          />

          {icon && (
            <div data-testid={`${props.name}-icon`} className={iconStyle}>
              {icon()}
            </div>
          )}
        </div>
      </div>

      {error && (
        <div data-testid={`${name}-error`} className={errorStyle}>
          {error}
        </div>
      )}
    </div>
  )
}

export default Input
