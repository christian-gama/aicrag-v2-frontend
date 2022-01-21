import { FormStates, FormActionPayload } from './protocols/form.model'

export const setFormValidator = (
  state: FormStates,
  action: FormActionPayload
) => {
  return {
    ...state,
    form: {
      ...state.form,
      validator: action.payload.validator!
    }
  }
}

export const setIsResetting = (
  state: FormStates,
  action: FormActionPayload
) => {
  return {
    ...state,
    form: {
      ...state.form,
      isResetting: action.payload.isResetting!
    }
  }
}

export const resetForm = (): FormStates => {
  return {
    form: {
      isResetting: true,
      isDirty: false,
      isSubmitted: false,
      error: undefined,
      isSubmitting: false,
      isValid: false,
      isValidating: false,
      isFocused: false,
      isChanging: false,
      data: {},
      validator: undefined
    },
    input: {
      currentType: {},
      error: {},
      isFocused: {},
      isTouched: {},
      isValid: {},
      value: {}
    }
  }
}

export const setFormError = (
  state: FormStates,
  action: FormActionPayload
): FormStates => {
  return {
    ...state,
    form: {
      ...state.form,
      error: action.payload.error
    }
  }
}

export const setFormIsValid = (
  state: FormStates,
  action: FormActionPayload
): FormStates => {
  return { ...state, form: { ...state.form, isValid: action.payload.isValid! } }
}

export const setFormIsDirty = (
  state: FormStates,
  action: FormActionPayload
): FormStates => {
  return { ...state, form: { ...state.form, isDirty: action.payload.isDirty! } }
}

export const setFormIsChanging = (
  state: FormStates,
  action: FormActionPayload
): FormStates => {
  return {
    ...state,
    form: {
      ...state.form,
      isChanging: action.payload.isChanging!,
      isResetting: false
    }
  }
}

export const setIsFocused = (
  state: FormStates,
  action: FormActionPayload
): FormStates => {
  return {
    ...state,
    form: { ...state.form, isFocused: action.payload.isFocused! }
  }
}

export const setFormIsSubmitting = (
  state: FormStates,
  action: FormActionPayload
): FormStates => {
  return {
    ...state,
    form: { ...state.form, isSubmitting: action.payload.isSubmitting! }
  }
}

export const setFormIsSubmitted = (
  state: FormStates,
  action: FormActionPayload
): FormStates => {
  return {
    ...state,
    form: { ...state.form, isSubmitted: action.payload.isSubmitted! }
  }
}

export const setFormIsValidating = (
  state: FormStates,
  action: FormActionPayload
): FormStates => {
  return {
    ...state,
    form: { ...state.form, isValidating: action.payload.isValidating! }
  }
}

export const setFormData = (
  state: FormStates,
  action: FormActionPayload
): FormStates => {
  return {
    ...state,
    form: {
      ...state.form,
      data: {
        ...state.form.data,
        ...action.payload.data!
      }
    }
  }
}
