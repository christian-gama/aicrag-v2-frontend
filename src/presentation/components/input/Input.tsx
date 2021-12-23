/* eslint-disable react/display-name */
import React, { forwardRef, useImperativeHandle, useReducer, useRef } from 'react'
import { IValidator } from '@/domain/validators/validator.model'
import EyeIcon from '@/presentation/components/icons/eyeIcon/EyeIcon'
import { inputClasses, LabelRecipeVariants } from './Input.css'
import { InputInitialState, InputReducer } from './InputReducer'

export type InputProps = {
  icon?: React.ReactElement
  label: string
  validator?: (value: string) => IValidator
  ref?: React.Ref<HTMLInputElement>
  type?: 'text' | 'email' | 'password' | 'number'
  onChange?: (event: React.InputHTMLAttributes<HTMLInputElement>) => void
}

export const Input: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ label, onChange, type = 'text', icon, validator }, ref) => {
    const { boxStyle, containerStyle, contentStyle, iconStyle, inputRecipe, labelRecipe, errorStyle } = inputClasses

    // Hooks
    const [state, dispatch] = useReducer(InputReducer, InputInitialState, (init) => ({ ...init, currentType: type }))
    const inputRef = useRef<HTMLInputElement>(null)
    useImperativeHandle(ref, (): any => ({
      value: state.value
    }))

    // Handlers
    function changeHandler (event: React.ChangeEvent<HTMLInputElement>): void {
      const value = event.target.value

      dispatch({ type: 'SET_VALUE', payload: { value } })
      dispatch({
        type: 'SET_IS_VALID',
        payload: { error: validator?.(value) }
      })

      // render error message only if input was already touched to avoid displaying error message while typing
      if (state.isTouched) dispatch({ type: 'SET_ERROR', payload: { error: validator?.(value) } })

      onChange?.(event)
    }

    const focusHandler = (event: React.FocusEvent<HTMLInputElement>): void => {
      const value = event.currentTarget.value

      dispatch({ type: 'SET_IS_VALID', payload: { error: validator?.(value) } })
      dispatch({ type: 'SET_IS_FOCUSED', payload: { isFocused: true } })
    }

    const blurHandler = (event: React.FocusEvent<HTMLInputElement>): void => {
      const value = event.currentTarget.value

      dispatch({ type: 'SET_IS_FOCUSED', payload: { isFocused: false } })
      dispatch({ type: 'SET_IS_TOUCHED', payload: { isTouched: true } })
      dispatch({ type: 'SET_ERROR', payload: { error: validator?.(value) } })
    }

    const showPasswordHandler = (): void =>
      state.currentType === 'password'
        ? dispatch({ type: 'SET_TYPE', payload: { type: 'text' } })
        : dispatch({ type: 'SET_TYPE', payload: { type: 'password' } })

    const getState = (): LabelRecipeVariants['state'] => {
      if (validator) {
        if (!state.isValid && state.isTouched) {
          return 'error'
        }

        if (state.isValid) {
          return 'success'
        }
      }

      return 'default'
    }

    // Styles
    const labelStyle = labelRecipe({
      float: state.isFocused || state.value !== '',
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
              type={state.currentType}
              value={state.value}
            />

            {shouldRenderIcon && (
              <div data-testid={`${label}-icon`} className={iconStyle}>
                {type !== 'password' && icon}
                {type === 'password' && (
                  <EyeIcon showPassword={state.currentType !== 'password'} onClick={showPasswordHandler} />
                )}
              </div>
            )}
          </div>
        </div>

        {state.errorMessage && (
          <div data-testid={`${label}-error`} className={errorStyle}>
            {state.errorMessage}
          </div>
        )}
      </div>
    )
  }
)
