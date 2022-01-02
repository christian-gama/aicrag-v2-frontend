import IValidation from '@/domain/validation/validation.model'
import Maybe from '@/application/utils/typescript/maybe.model'

export type FormStates = {
  isDirty: boolean
  isSubmitted: boolean
  errorMessage: Maybe<Error['message']>
  formData: {
    [key: string]: any
  }
  isSubmitting: boolean
  isValid: boolean
  isValidating: boolean
  isFocused: boolean
  isChanging: boolean
  isResetting: boolean
  validator?: IValidation
}

export type FormActions = {
  init: () => {}
  resetForm: () => {}
  setErrorMessage: (error: string) => {}
  setFormData: (formData: { [key: string]: any }) => {}
  setIsChanging: (isChanging: boolean) => {}
  setIsDirty: (isDirty: boolean) => {}
  setIsFocused: (isFocused: boolean) => {}
  setIsSubmitted: (isSubmitted: boolean) => {}
  setIsSubmitting: (isSubmitting: boolean) => {}
  setIsValid: (isValid: boolean) => {}
  setIsValidating: (isValidating: boolean) => {}
}

export type FormActionPayload = {
  type:
  | 'RESET_FORM'
  | 'SET_ERROR_MESSAGE'
  | 'SET_FORM_DATA'
  | 'SET_IS_CHANGING'
  | 'SET_IS_DIRTY'
  | 'SET_IS_FOCUSED'
  | 'SET_IS_SUBMITTED'
  | 'SET_IS_SUBMITTING'
  | 'SET_IS_VALID'
  | 'SET_IS_VALIDATING'
  | 'SET_VALIDATOR'
  payload: Partial<{ [key in keyof FormStates]: FormStates[key] }>
}
