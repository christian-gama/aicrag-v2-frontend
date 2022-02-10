import { useContext } from 'react'
import { Maybe } from '@/helpers'
import { IValidation } from '@/services/validators'
import {
  FormActionPayload,
  FormContext,
  FormInputActionPayload,
  FormStates
} from '.'

export const useForm = <
  T extends { [key: string]: string | number | string[] | undefined }
>() => {
  const { dispatch, state } = useContext<{
    dispatch: (options: FormActionPayload | FormInputActionPayload) => void
    state: FormStates<T>
  }>(FormContext)

  return {
    state,
    formActions: {
      setFormValidator: (validator: Maybe<IValidation>) =>
        dispatch({
          type: 'FORM/SET_VALIDATOR',
          payload: { validator }
        }),

      setFormIsResetting: (isResetting: boolean) =>
        dispatch({
          type: 'FORM/SET_IS_RESETTING',
          payload: { isResetting }
        }),

      resetForm: () => dispatch({ type: 'FORM/RESET_FORM', payload: {} }),

      setFormError: (error: Maybe<string>) =>
        dispatch({
          type: 'FORM/SET_ERROR',
          payload: {
            error
          }
        }),

      setFormIsValid: (isValid: boolean) =>
        dispatch({
          type: 'FORM/SET_IS_VALID',
          payload: { isValid }
        }),

      setFormIsSubmitting: (isSubmitting: boolean) =>
        dispatch({
          type: 'FORM/SET_IS_SUBMITTING',
          payload: { isSubmitting }
        }),

      setFormIsDirty: (isDirty: boolean) =>
        dispatch({
          type: 'FORM/SET_IS_DIRTY',
          payload: { isDirty }
        }),

      setFormIsSubmitted: (isSubmitted: boolean) =>
        dispatch({
          type: 'FORM/SET_IS_SUBMITTED',
          payload: { isSubmitted }
        }),

      setFormIsValidating: (isValidating: boolean) =>
        dispatch({
          type: 'FORM/SET_IS_VALIDATING',
          payload: { isValidating }
        }),

      setFormData: <U extends keyof T>(name: U, value: T[U]) =>
        dispatch({
          type: 'FORM/SET_FORM_DATA',
          payload: { data: { [name]: value } }
        }),

      setInputIsValid: <U extends keyof T>(name: U, isValid: boolean) =>
        dispatch({
          type: 'INPUT/SET_IS_VALID',
          payload: { isValid: { [name]: isValid } }
        }),

      setInputIsTouched: <U extends keyof T>(name: U, isTouched: boolean) =>
        dispatch({
          type: 'INPUT/SET_IS_TOUCHED',
          payload: { isTouched: { [name]: isTouched } }
        }),

      setInputIsFocused: <U extends keyof T>(name: U, isFocused: boolean) =>
        dispatch({
          type: 'INPUT/SET_IS_FOCUSED',
          payload: { isFocused: { [name]: isFocused } }
        }),

      setInputValue: <U extends keyof T>(name: U, value: T[U]) =>
        dispatch({
          type: 'INPUT/SET_VALUE',
          payload: { value: { [name]: value } }
        }),

      setInputError: <U extends keyof T>(name: U, error: Maybe<string>) =>
        dispatch({
          type: 'INPUT/SET_ERROR',
          payload: { error: { [name]: error } }
        }),

      setInputCurrentType: <U extends keyof T>(
        name: U,
        currentType:
        | 'number'
        | 'email'
        | 'password'
        | 'text'
        | 'search'
        | 'textArea'
      ) =>
        dispatch({
          type: 'INPUT/SET_CURRENT_TYPE',
          payload: { currentType: { [name]: currentType } }
        })
    }
  }
}
