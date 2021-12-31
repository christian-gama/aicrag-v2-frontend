import React, { useEffect, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IValidation from '@/domain/validation/validation.model'
import { formActions } from '@/application/models/form'
import { FormStates } from '@/application/models/form/protocols/form.model'
import { AppDispatch, RootState } from '@/application/store'
import EyeIcon from '../../components/UI/icons/EyeIcon'
import Input from '../../components/UI/Input'
import { InputInitialState, InputReducer } from './InputReducer'

type InputProps = {
  icon?: React.ReactElement
  name: string
  type?: 'text' | 'email' | 'password' | 'number'

  /**
   * @description Passed automatically by the parent Form component
   * @protected
   */
  validation?: IValidation

  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
}

/**
 * @description Must be used inside a Form component
 */
const ControlledInput: React.FC<InputProps> = (props) => {
  const { setFormData } = formActions

  const reduxDispatch = useDispatch<AppDispatch>()
  const formData = useSelector<RootState, FormStates['formData']>((state) => state.form.formData)

  // Hooks
  const [state, reducerDispatch] = useReducer(InputReducer, InputInitialState, (init) => ({
    ...init,
    currentType: props.type ?? 'text'
  }))

  useEffect(() => {
    reduxDispatch(setFormData({ [props.name]: state.value }))
  }, [])

  // Handlers
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value

    reducerDispatch({ type: 'SET_VALUE', payload: { value } })
    reducerDispatch({
      type: 'SET_IS_VALID',
      payload: { error: props.validation?.validate(props.name, { ...formData, [props.name]: value }) }
    })

    // render error message only if input was already touched to avoid displaying error message while typing
    if (state.isTouched) {
      reducerDispatch({
        type: 'SET_ERROR',
        payload: { error: props.validation?.validate(props.name, { ...formData, [props.name]: value }) }
      })
    }

    if (props.onChange) props.onChange(event)
  }

  const onFocusHandler = (event: React.FocusEvent<HTMLInputElement>): void => {
    const value = event.currentTarget.value

    reducerDispatch({
      type: 'SET_IS_VALID',
      payload: { error: props.validation?.validate(props.name, { ...formData, [props.name]: value }) }
    })
    reducerDispatch({ type: 'SET_IS_FOCUSED', payload: { isFocused: true } })

    if (props.onFocus) props.onFocus(event)

    reduxDispatch(setFormData({ [props.name]: state.value }))
  }

  const onBlurHandler = (event: React.FocusEvent<HTMLInputElement>): void => {
    const value = event.currentTarget.value

    reducerDispatch({ type: 'SET_IS_FOCUSED', payload: { isFocused: false } })
    reducerDispatch({ type: 'SET_IS_TOUCHED', payload: { isTouched: true } })
    reducerDispatch({
      type: 'SET_ERROR',
      payload: { error: props.validation?.validate(props.name, { ...formData, [props.name]: value }) }
    })

    if (props.onBlur) props.onBlur(event)

    reduxDispatch(setFormData({ [props.name]: state.value }))
  }

  const showPasswordHandler = (): void =>
    state.currentType === 'password'
      ? reducerDispatch({ type: 'SET_TYPE', payload: { type: 'text' } })
      : reducerDispatch({ type: 'SET_TYPE', payload: { type: 'password' } })

  const shouldRenderIcon = props.type === 'password' || props.icon

  return (
    <Input
      name={props.name}
      error={state.error}
      isFocused={state.isFocused!}
      isTouched={state.isTouched!}
      isValid={state.isValid!}
      type={state.currentType!}
      validation={props.validation}
      value={state.value!}
      onBlur={onBlurHandler}
      onChange={onChangeHandler}
      onFocus={onFocusHandler}
      icon={
        shouldRenderIcon
          ? () => (
              <>
                {props.type !== 'password' && props.icon}
                {props.type === 'password' && (
                  <EyeIcon showPassword={state.currentType !== 'password'} onClick={showPasswordHandler} />
                )}
              </>
            )
          : undefined
      }
    />
  )
}

export default ControlledInput
export { InputProps }
