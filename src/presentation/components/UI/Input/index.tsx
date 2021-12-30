import React, { useEffect, useReducer } from 'react'
import { useDispatch } from 'react-redux'
import IValidation from '@/domain/validation/validation.model'
import { IForm } from '@/application/models/form'
import { AppDispatch } from '@/application/store'
import EyeIcon from '@/presentation/components/UI/icons/EyeIcon'
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
const Input: React.FC<InputProps> = (props) => {
  const reduxDispatch = useDispatch<AppDispatch>()

  // Hooks
  const [state, reducerDispatch] = useReducer(InputReducer, InputInitialState, (init) => ({
    ...init,
    currentType: props.type ?? 'text'
  }))

  useEffect(() => {
    reduxDispatch(props.form!.setData({ [props.name]: state.value }))
  }, [])

  // Handlers
  function changeHandler (event: React.ChangeEvent<HTMLInputElement>): void {
    const value = event.target.value

    reducerDispatch({ type: 'SET_VALUE', payload: { value } })
    reducerDispatch({
      type: 'SET_IS_VALID',
      payload: { error: props.validation?.validate(props.name, { ...props.form!.data, [props.name]: value }) }
    })

    // render error message only if input was already touched to avoid displaying error message while typing
    if (state.isTouched) {
      reducerDispatch({
        type: 'SET_ERROR',
        payload: { error: props.validation?.validate(props.name, { ...props.form!.data, [props.name]: value }) }
      })
    }

    if (props.onChange) props.onChange(event)
  }

  const focusHandler = (event: React.FocusEvent<HTMLInputElement>): void => {
    const value = event.currentTarget.value

    reducerDispatch({
      type: 'SET_IS_VALID',
      payload: { error: props.validation?.validate(props.name, { ...props.form!.data, [props.name]: value }) }
    })
    reducerDispatch({ type: 'SET_IS_FOCUSED', payload: { isFocused: true } })

    if (props.onFocus) props.onFocus(event)

    reduxDispatch(props.form!.setData({ [props.name]: state.value }))
  }

  const blurHandler = (event: React.FocusEvent<HTMLInputElement>): void => {
    const value = event.currentTarget.value

    reducerDispatch({ type: 'SET_IS_FOCUSED', payload: { isFocused: false } })
    reducerDispatch({ type: 'SET_IS_TOUCHED', payload: { isTouched: true } })
    reducerDispatch({
      type: 'SET_ERROR',
      payload: { error: props.validation?.validate(props.name, { ...props.form!.data, [props.name]: value }) }
    })

    if (props.onBlur) props.onBlur(event)

    reduxDispatch(props.form!.setData({ [props.name]: state.value }))
  }

  const showPasswordHandler = (): void =>
    state.currentType === 'password'
      ? reducerDispatch({ type: 'SET_TYPE', payload: { type: 'text' } })
      : reducerDispatch({ type: 'SET_TYPE', payload: { type: 'password' } })

  const getState = (): LabelRecipeVariants['state'] => {
    if (props.validation) {
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
    hasIcon: !!props.icon || props.type === 'password',
    state: getState()
  })

  const uniqueId = `input-${props.name.toLowerCase()}-${Math.floor(Math.random() * 1000)}`
  const shouldRenderIcon = props.type === 'password' || props.icon

  return (
    <div className={containerStyle} data-testid={`${props.name}-container`}>
      <div className={contentStyle}>
        <label data-testid={`${props.name}-label`} htmlFor={uniqueId} className={labelStyle}>
          {props.name}
        </label>

        <div className={boxStyle}>
          <input
            className={inputStyle}
            data-testid={`${props.name}-input`}
            id={uniqueId}
            name={props.name}
            onBlur={blurHandler}
            onChange={changeHandler}
            onFocus={focusHandler}
            type={state.currentType}
            value={state.value}
          />

          {shouldRenderIcon && (
            <div data-testid={`${props.name}-icon`} className={iconStyle}>
              {props.type !== 'password' && props.icon}
              {props.type === 'password' && (
                <EyeIcon showPassword={state.currentType !== 'password'} onClick={showPasswordHandler} />
              )}
            </div>
          )}
        </div>
      </div>

      {state.error && (
        <div data-testid={`${props.name}-error`} className={errorStyle}>
          {state.error}
        </div>
      )}
    </div>
  )
}

export default Input
export { InputProps }
