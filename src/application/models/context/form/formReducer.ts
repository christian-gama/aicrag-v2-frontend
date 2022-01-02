import { FormActionPayload, FormStates } from './protocols/form.model'

const formReducer = (state: FormStates, action: FormActionPayload): FormStates => {
  switch (action.type) {
    case 'RESET_FORM':
      return resetForm(state)

    case 'SET_ERROR_MESSAGE':
      return setErrorMessage(state, action)

    case 'SET_IS_VALID':
      return setIsValid(state, action)

    case 'SET_IS_DIRTY':
      return setIsDirty(state, action)

    case 'SET_IS_CHANGING':
      return setIsChanging(state, action)

    case 'SET_IS_FOCUSED':
      return setIsFocused(state, action)

    case 'SET_IS_SUBMITTING':
      return setIsSubmitting(state, action)

    case 'SET_IS_SUBMITTED':
      return setIsSubmitted(state, action)

    case 'SET_IS_VALIDATING':
      return setIsValidating(state, action)

    case 'SET_FORM_DATA':
      return setFormData(state, action)

    case 'SET_VALIDATOR':
      return setValidator(state, action)
  }
}

const setValidator = (state: FormStates, action: FormActionPayload) => {
  return {
    ...state,
    validator: action.payload.validator!
  }
}

const resetForm = (state: FormStates): FormStates => {
  return {
    ...state,
    isResetting: true,
    isDirty: false,
    isSubmitted: false,
    errorMessage: undefined,
    isSubmitting: false,
    isValid: false,
    isValidating: false,
    isFocused: false,
    isChanging: false,
    formData: {},
    validator: undefined
  }
}

export const setErrorMessage = (state: FormStates, action: FormActionPayload): FormStates => {
  return {
    ...state,
    errorMessage: action.payload.errorMessage!
  }
}

export const setIsValid = (state: FormStates, action: FormActionPayload): FormStates => {
  return { ...state, isValid: action.payload.isValid! }
}

export const setIsDirty = (state: FormStates, action: FormActionPayload): FormStates => {
  return { ...state, isDirty: action.payload.isDirty! }
}

export const setIsChanging = (state: FormStates, action: FormActionPayload): FormStates => {
  return { ...state, isChanging: action.payload.isChanging!, isResetting: false }
}

export const setIsFocused = (state: FormStates, action: FormActionPayload): FormStates => {
  return { ...state, isFocused: action.payload.isFocused! }
}

export const setIsSubmitting = (state: FormStates, action: FormActionPayload): FormStates => {
  return { ...state, isSubmitting: action.payload.isSubmitting! }
}

export const setIsSubmitted = (state: FormStates, action: FormActionPayload): FormStates => {
  return { ...state, isSubmitted: action.payload.isSubmitted! }
}

export const setIsValidating = (state: FormStates, action: FormActionPayload): FormStates => {
  return { ...state, isValidating: action.payload.isValidating! }
}

export const setFormData = (state: FormStates, action: FormActionPayload): FormStates => {
  return {
    ...state,
    formData: {
      ...state.formData,
      ...action.payload.formData!
    }
  }
}

export default formReducer
