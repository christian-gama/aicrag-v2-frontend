import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formActions } from '@/application/models/form'
import { FormProperties } from '@/application/models/form/protocols/form.model'
import findForm from '@/application/models/form/utils/findForm'
import { AppDispatch, RootState } from '@/application/store'
import Maybe from '@/application/utils/typescript/maybe.model'
import EyeIcon from '../../components/UI/icons/EyeIcon'
import Input from '../../components/UI/Input'
import ControlledInputProps from './ControlledInput.model'
import onBlurHandler from './methods/onBlurHandler'
import onChangeHandler from './methods/onChangeHandler'
import onFocusHandler from './methods/onFocusHandler'
import useInput from './useInput'

/**
 * @description Must be used inside a Form component
 */
const ControlledInput: React.FC<Omit<ControlledInputProps, 'uniqueFormName' | 'validation'>> = (
  props: ControlledInputProps
) => {
  const { uniqueFormName, validation, icon, name, type } = props
  const { setFormData, setIsChanging } = formActions

  const dispatch = useDispatch<AppDispatch>()
  const formData = useSelector<RootState, Maybe<FormProperties['formData']>>(
    (state) => findForm(state.form.forms, uniqueFormName!)?.formData
  )
  const isResetting = useSelector<RootState, Maybe<FormProperties['isResetting']>>(
    (state) => findForm(state.form.forms, uniqueFormName!)?.isResetting
  )

  const inputState = useInput({ currentType: type ?? 'text' })

  useEffect(() => {
    dispatch(setFormData({ [name]: inputState.value, name: uniqueFormName! }))
  }, [])

  useEffect(() => {
    inputState.setValue(formData?.[name] ?? '')
  }, [formData])

  useEffect(() => {
    if (isResetting) inputState.reset()
  }, [isResetting])

  useEffect(() => {
    inputState.setCurrentType(type ?? 'text')
  }, [])

  const showPasswordHandler = (): void =>
    inputState.currentType === 'password' ? inputState.setCurrentType('text') : inputState.setCurrentType('password')

  const shouldRenderIcon = type === 'password' || icon

  return (
    <Input
      name={name}
      error={inputState.error}
      isFocused={inputState.isFocused}
      isTouched={inputState.isTouched}
      isValid={inputState.isValid}
      type={inputState.currentType}
      validation={validation}
      value={inputState.value}
      onBlur={(event) =>
        onBlurHandler({
          dispatch,
          event,
          formData,
          inputState,
          ...props,
          ...formActions
        })
      }
      onChange={(event) =>
        onChangeHandler({
          dispatch,
          event,
          inputState,
          setIsChanging,
          formData,
          ...props
        })
      }
      onFocus={(event) => onFocusHandler({ event, dispatch, inputState, ...props, formData, ...formActions })}
      icon={
        shouldRenderIcon
          ? () => (
              <>
                {type !== 'password' && icon}
                {type === 'password' && (
                  <EyeIcon showPassword={inputState.currentType !== 'password'} onClick={showPasswordHandler} />
                )}
              </>
            )
          : undefined
      }
    />
  )
}

export default ControlledInput
