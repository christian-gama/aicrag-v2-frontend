import React from 'react'
import IValidation from '@/domain/validation/validation.model'
import Maybe from '@/application/utils/typescript/maybe.model'

type Object<T extends unknown> = { [key: string]: T }

export type FormStates = {
  form: {
    error: Maybe<string>
    isDirty: boolean
    isSubmitted: boolean
    isChanging: boolean
    isFocused: boolean
    isResetting: boolean
    isSubmitting: boolean
    isValid: boolean
    isValidating: boolean
    validator?: IValidation
    data: Object<any>
  }
  input: {
    currentType: Object<React.InputHTMLAttributes<HTMLInputElement>['type']>
    error: Object<Maybe<string>>
    isFocused: Object<boolean>
    isTouched: Object<boolean>
    isValid: Object<boolean>
    value: Object<string>
  }
}

export type FormActions = {
  init: () => {}
  resetForm: () => {}
  setFormError: (field: string) => {}
  setFormData: (formData: { [key: string]: any }) => {}
  setFormIsChanging: (isChanging: boolean) => {}
  setFormIsDirty: (isDirty: boolean) => {}
  setFormIsFocused: (isFocused: boolean) => {}
  setFormIsSubmitted: (isSubmitted: boolean) => {}
  setFormIsSubmitting: (isSubmitting: boolean) => {}
  setFormIsValid: (isValid: boolean) => {}
  setFormIsValidating: (isValidating: boolean) => {}
}

export type FormInputActions = {
  setCurrentType: (currentType: Object<string>) => {}
  setError: (error: Object<string>) => {}
  setIsFocused: (isFocused: Object<boolean>) => {}
  setIsTouched: (isTouched: Object<boolean>) => {}
  setIsValid: (isValid: Object<boolean>) => {}
  setValue: (value: Object<string>) => {}
}

export type FormActionPayload = {
  type:
  | 'FORM/RESET_FORM'
  | 'FORM/SET_ERROR'
  | 'FORM/SET_FORM_DATA'
  | 'FORM/SET_IS_CHANGING'
  | 'FORM/SET_IS_DIRTY'
  | 'FORM/SET_IS_FOCUSED'
  | 'FORM/SET_IS_RESETTING'
  | 'FORM/SET_IS_SUBMITTED'
  | 'FORM/SET_IS_SUBMITTING'
  | 'FORM/SET_IS_VALID'
  | 'FORM/SET_IS_VALIDATING'
  | 'FORM/SET_VALIDATOR'

  payload: Partial<{ [key in keyof FormStates['form']]: FormStates['form'][key] }>
}

export type FormInputActionPayload = {
  type:
  | 'INPUT/SET_ERROR'
  | 'INPUT/SET_IS_TOUCHED'
  | 'INPUT/SET_IS_FOCUSED'
  | 'INPUT/SET_IS_VALID'
  | 'INPUT/SET_VALUE'
  | 'INPUT/SET_CURRENT_TYPE'
  payload: Partial<{ [key in keyof FormStates['input']]: FormStates['input'][key] }>
}