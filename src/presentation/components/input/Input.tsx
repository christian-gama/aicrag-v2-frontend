/* eslint-disable react/display-name */
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import IValidation from '@/domain/validation/validation-protocol'
import EyeIcon from '@/presentation/components/icons/eyeIcon/EyeIcon'
import { inputClasses, LabelRecipeVariants } from './Input.css'

type InputProps = {
  icon?: React.ReactElement
  label: string
  validation?: IValidation['validate']
  ref?: React.Ref<HTMLInputElement>
  type?: 'text' | 'email' | 'password' | 'number'
  onChange?: (event: React.InputHTMLAttributes<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ label, onChange, type = 'text', icon, validation }, ref) => {
    const { boxStyle, containerStyle, contentStyle, iconStyle, inputRecipe, labelRecipe, errorStyle } = inputClasses

    // Hooks
    const [currentType, setCurrentType] = useState(type)
    const [error, setError] = useState('')
    const [isFocused, setIsFocused] = useState(false)
    const [isTouched, setIsTouched] = useState(false)
    const [isValid, setIsValid] = useState(false)
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    useImperativeHandle(ref, (): any => {
      return {
        value
      }
    })

    // Handlers
    function changeHandler (event: React.ChangeEvent<HTMLInputElement>): void {
      const value = event.target.value

      setValue(value)
      setIsValid(validation?.(value).isValid)
      if (isTouched) setError(validation?.(value).error)

      onChange?.(event)
    }

    const focusHandler = (): void => {
      setIsValid(validation?.(value).isValid)
      setIsFocused(true)
    }

    const blurHandler = (): void => {
      setIsFocused(false)
      setIsTouched(true)
      setError(validation?.(value).error)
    }

    const showPasswordHandler = (): void =>
      currentType === 'password' ? setCurrentType('text') : setCurrentType('password')

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

    // Styles
    const labelStyle = labelRecipe({
      float: isFocused || value !== '',
      state: getState()
    })

    const inputStyle = inputRecipe({
      hasIcon: !!icon || type === 'password',
      state: getState()
    })

    const uniqueId = `input-${label.toLowerCase()}-${Math.floor(Math.random() * 1000)}`

    const shouldRenderIcon = type === 'password' || icon

    return (
      <div className={containerStyle} data-testid={`${label}-container`}>
        <div className={contentStyle}>
          <label data-testid={`${label}-label`} htmlFor={uniqueId} className={labelStyle}>
            {label}
          </label>

          <div className={boxStyle}>
            <input
              className={inputStyle}
              data-testid={`${label}-input`}
              id={uniqueId}
              name={label}
              onBlur={blurHandler}
              onChange={changeHandler}
              onFocus={focusHandler}
              ref={inputRef}
              type={currentType}
              value={value}
            />

            {shouldRenderIcon && (
              <div data-testid={`${label}-icon`} className={iconStyle}>
                {type !== 'password' && icon}
                {type === 'password' && (
                  <EyeIcon showPassword={currentType !== 'password'} onClick={showPasswordHandler} />
                )}
              </div>
            )}
          </div>
        </div>

        {error && (
          <div data-testid={`${label}-error`} className={errorStyle}>
            {error}
          </div>
        )}
      </div>
    )
  }
)

export { InputProps }
export default Input
