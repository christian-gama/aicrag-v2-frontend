import { Boolean, Maybe, Optional, String } from '@/helpers'
import { IValidation } from '@/services/validators'
import { BaseInput } from '@/components/atoms/BaseInput'

type Object<T extends unknown> = { [key: string]: T }

export type FormStates<
  T extends { [key: string]: string | number | string[] | undefined }
> = {
  form: {
    validator?: IValidation
    isSubmitting: boolean
    isValidating: boolean
    error: Maybe<string>
    isSubmitted: boolean
    isResetting: boolean
    data: T
    isValid: boolean
  }
  input: {
    currentType: Object<React.ComponentPropsWithRef<typeof BaseInput>['type']>
    error: Optional<String<T>>
    isFocused: Boolean<T>
    isTouched: Boolean<T>
    isValid: Boolean<T>
    value: T
  }
}

export type FormActions = {
  setFormData: (formData: { [key: string]: any }) => {}
  setFormIsSubmitting: (isSubmitting: boolean) => {}
  setFormIsValidating: (isValidating: boolean) => {}
  setFormIsSubmitted: (isSubmitted: boolean) => {}
  setFormIsValid: (isValid: boolean) => {}
  setFormError: (field: string) => {}
  resetForm: () => {}
  init: () => {}
}

export type FormInputActions = {
  setCurrentType: (currentType: Object<string>) => {}
  setIsFocused: (isFocused: Object<boolean>) => {}
  setIsTouched: (isTouched: Object<boolean>) => {}
  setIsValid: (isValid: Object<boolean>) => {}
  setError: (error: Object<string>) => {}
  setValue: (value: Object<string>) => {}
}

export type FormActionPayload = {
  type:
  | 'FORM/SET_IS_SUBMITTING'
  | 'FORM/SET_IS_VALIDATING'
  | 'FORM/SET_IS_RESETTING'
  | 'FORM/SET_IS_SUBMITTED'
  | 'FORM/SET_FORM_DATA'
  | 'FORM/SET_VALIDATOR'
  | 'FORM/SET_IS_VALID'
  | 'FORM/RESET_FORM'
  | 'FORM/SET_ERROR'

  payload: Partial<{
    [key in keyof FormStates<any>['form']]: FormStates<any>['form'][key]
  }>
}

export type FormInputActionPayload = {
  type:
  | 'INPUT/SET_CURRENT_TYPE'
  | 'INPUT/SET_IS_TOUCHED'
  | 'INPUT/SET_IS_FOCUSED'
  | 'INPUT/SET_IS_VALID'
  | 'INPUT/SET_ERROR'
  | 'INPUT/SET_VALUE'
  payload: Partial<{
    [key in keyof FormStates<any>['input']]: FormStates<any>['input'][key]
  }>
}
