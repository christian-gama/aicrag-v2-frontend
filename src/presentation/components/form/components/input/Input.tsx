import React, { useEffect, useReducer } from 'react'
import { useDispatch } from 'react-redux'
import IValidation from '@/domain/validation/validation.model'
import { AppDispatch } from '@/infra/store'
import { IForm } from '@/infra/store/form'
import EyeIcon from '@/presentation/components/UI/icons/eyeIcon/EyeIcon'
import { inputClasses, LabelRecipeVariants } from './Input.css'
import { InputInitialState, InputReducer } from './InputReducer'

type InputProps = {
  /**
   * @description Passed automatically by the parent Form component
   * @protected
   */
  form?: {
    data: IForm['states']['formData']
    setData: IForm['actions']['setFormData']
  }

  icon?: React.ReactElement
  name: string
  type?: 'text' | 'email' | 'password' | 'number'

  /**
   * @description Passed automatically by the parent Form component
   * @protected
   */
  validation?: IValidation

  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  onChange?: (event: React.InputHTMLAttributes<HTMLInputElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
}

/**
 * @description Must be used inside a Form component
 */
const Input: React.FC<InputProps> = ({ name, onChange, type = 'text', icon, validation, onBlur, onFocus, form }) => {
  const reduxDispatch = useDispatch<AppDispatch>()

  // Hooks
  const [state, reducerDispatch] = useReducer(InputReducer, InputInitialState, (init) => ({
    ...init,
    currentType: type
  }))

  useEffect(() => {
    reduxDispatch(form!.setData({ [name]: state.value }))
  }, [])

  // Handlers
  function changeHandler (event: React.ChangeEvent<HTMLInputElement>): void {
    const value = event.target.value

    reducerDispatch({ type: 'SET_VALUE', payload: { value } })
    reducerDispatch({
      type: 'SET_IS_VALID',
      payload: { error: validation?.validate(name, { ...form!.data, [name]: value }) }
    })

    // render error message only if input was already touched to avoid displaying error message while typing
    if (state.isTouched) {
      reducerDispatch({
        type: 'SET_ERROR',
        payload: { error: validation?.validate(name, { ...form!.data, [name]: value }) }
      })
    }

    if (onChange) onChange(event)
  }

  const focusHandler = (event: React.FocusEvent<HTMLInputElement>): void => {
    const value = event.currentTarget.value

    reducerDispatch({
      type: 'SET_IS_VALID',
      payload: { error: validation?.validate(name, { ...form!.data, [name]: value }) }
    })
    reducerDispatch({ type: 'SET_IS_FOCUSED', payload: { isFocused: true } })

    if (onFocus) onFocus(event)

    reduxDispatch(form!.setData({ [name]: state.value }))
  }

  const blurHandler = (event: React.FocusEvent<HTMLInputElement>): void => {
    const value = event.currentTarget.value

    reducerDispatch({ type: 'SET_IS_FOCUSED', payload: { isFocused: false } })
    reducerDispatch({ type: 'SET_IS_TOUCHED', payload: { isTouched: true } })
    reducerDispatch({
      type: 'SET_ERROR',
      payload: { error: validation?.validate(name, { ...form!.data, [name]: value }) }
    })

    if (onBlur) onBlur(event)

    reduxDispatch(form!.setData({ [name]: state.value }))
  }

  const showPasswordHandler = (): void =>
    state.currentType === 'password'
      ? reducerDispatch({ type: 'SET_TYPE', payload: { type: 'text' } })
      : reducerDispatch({ type: 'SET_TYPE', payload: { type: 'password' } })

  const getState = (): LabelRecipeVariants['state'] => {
    if (validation) {
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
  const { boxStyle, containerStyle, contentStyle, iconStyle, inputRecipe, labelRecipe, errorStyle } = inputClasses

  const labelStyle = labelRecipe({
    float: !!state.isFocused || state.value !== '',
    state: getState()
  })

  const inputStyle = inputRecipe({
    hasIcon: !!icon || type === 'password',
    state: getState()
  })

  const uniqueId = `input-${name.toLowerCase()}-${Math.floor(Math.random() * 1000)}`
  const shouldRenderIcon = type === 'password' || icon

  return (
    <div className={containerStyle} data-testid={`${name}-container`}>
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
            onBlur={blurHandler}
            onChange={changeHandler}
            onFocus={focusHandler}
            type={state.currentType}
            value={state.value}
          />

          {shouldRenderIcon && (
            <div data-testid={`${name}-icon`} className={iconStyle}>
              {type !== 'password' && icon}
              {type === 'password' && (
                <EyeIcon showPassword={state.currentType !== 'password'} onClick={showPasswordHandler} />
              )}
            </div>
          )}
        </div>
      </div>

      {state.error && (
        <div data-testid={`${name}-error`} className={errorStyle}>
          {state.error}
        </div>
      )}
    </div>
  )
}

export default Input
export { InputProps }
