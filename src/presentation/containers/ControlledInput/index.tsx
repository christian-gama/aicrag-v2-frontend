import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IValidation from '@/domain/validation/validation.model'
import { formActions } from '@/application/models/form'
import { FormProperties } from '@/application/models/form/protocols/form.model'
import { AppDispatch, RootState } from '@/application/store'
import Maybe from '@/application/utils/typescript/maybe.model'
import EyeIcon from '../../components/UI/icons/EyeIcon'
import Input from '../../components/UI/Input'

type InputProps = {
  /**
   * @description Passed automatically by the parent Form component
   * @protected
   */
  uniqueFormName?: string

  /**
   * @description Passed automatically by the parent Form component
   * @protected
   */
  validation?: IValidation

  icon?: React.ReactElement
  name: string
  type?: 'text' | 'email' | 'password' | 'number'

  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
}

/**
 * @description Must be used inside a Form component
 */
const ControlledInput: React.FC<InputProps> = (props) => {
  const { uniqueFormName, validation, icon, name, type, onBlur, onChange, onFocus } = props
  const { setFormData } = formActions

  const dispatch = useDispatch<AppDispatch>()
  const formData = useSelector<RootState, Maybe<FormProperties['formData']>>(
    (state) => state.form.forms.find((form) => form.name === uniqueFormName)?.formData
  )

  const [states, setStates] = useState({
    currentType: 'text' as NonNullable<InputProps['type']>,
    error: undefined as Maybe<string>,
    isFocused: false,
    isTouched: false,
    isValid: false,
    value: ''
  })

  useEffect(() => {
    dispatch(setFormData({ [name]: states.value, name: uniqueFormName! }))
  }, [])

  useEffect(() => {
    setStates((prev) => ({ ...prev, value: formData?.[name] ?? '', currentType: type ?? 'text' }))
  }, [formData])

  // Handlers
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value
    const error = validation?.validate(name, { ...formData, [name]: value })

    setStates((prev) => ({
      ...prev,
      value,
      isValid: !!error
    }))

    // render error message only if input was already touched to avoid displaying error message while typing
    if (states.isTouched) {
      setStates((prev) => ({
        ...prev,
        error: error
      }))
    }

    if (onChange) onChange(event)
  }

  const onFocusHandler = (event: React.FocusEvent<HTMLInputElement>): void => {
    const value = event.currentTarget.value
    const error = validation?.validate(name, { ...formData, [name]: value })

    setStates((prev) => ({
      ...prev,
      value,
      isValid: !!error,
      isFocused: true
    }))

    if (onFocus) onFocus(event)

    dispatch(setFormData({ [name]: states.value, name: uniqueFormName! }))
  }

  const onBlurHandler = (event: React.FocusEvent<HTMLInputElement>): void => {
    const value = event.currentTarget.value
    const error = validation?.validate(name, { ...formData, [name]: value })

    setStates((prev) => ({
      ...prev,
      value,
      isTouched: true,
      isFocused: false,
      error
    }))

    if (onBlur) onBlur(event)

    dispatch(setFormData({ [name]: states.value, name: uniqueFormName! }))
  }

  const showPasswordHandler = (): void =>
    states.currentType === 'password'
      ? setStates((prev) => ({ ...prev, currentType: 'text' }))
      : setStates((prev) => ({ ...prev, currentType: 'password' }))

  const shouldRenderIcon = type === 'password' || icon

  return (
    <Input
      name={name}
      error={states.error}
      isFocused={states.isFocused}
      isTouched={states.isTouched}
      isValid={states.isValid}
      type={states.currentType}
      validation={validation}
      value={states.value}
      onBlur={onBlurHandler}
      onChange={onChangeHandler}
      onFocus={onFocusHandler}
      icon={
        shouldRenderIcon
          ? () => (
              <>
                {type !== 'password' && icon}
                {type === 'password' && (
                  <EyeIcon showPassword={states.currentType !== 'password'} onClick={showPasswordHandler} />
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
