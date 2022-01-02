import { FormInputActionPayload, FormStates } from './protocols/form.model'

export const setInputIsValid = (state: FormStates, action: FormInputActionPayload): FormStates => {
  return {
    ...state,
    input: {
      ...state.input,
      isValid: {
        ...state.input.isValid,
        ...action.payload.isValid
      }
    }
  }
}

export const setInputIsTouched = (state: FormStates, action: FormInputActionPayload): FormStates => {
  return {
    ...state,
    input: {
      ...state.input,
      isTouched: {
        ...state.input.isTouched,
        ...action.payload.isTouched
      }
    }
  }
}

export const setInputIsFocused = (state: FormStates, action: FormInputActionPayload): FormStates => {
  return {
    ...state,
    input: {
      ...state.input,
      isFocused: {
        ...state.input.isFocused,
        ...action.payload.isFocused
      }
    }
  }
}

export const setInputValue = (state: FormStates, action: FormInputActionPayload): FormStates => {
  return {
    ...state,
    input: {
      ...state.input,
      value: {
        ...state.input.value,
        ...action.payload.value
      }
    }
  }
}

export const setInputError = (state: FormStates, action: FormInputActionPayload): FormStates => {
  return {
    ...state,
    input: {
      ...state.input,
      error: {
        ...state.input.error,
        ...action.payload.error
      }
    }
  }
}

export const setInputCurrentType = (state: FormStates, action: FormInputActionPayload): FormStates => {
  return {
    ...state,
    input: {
      ...state.input,
      currentType: {
        ...state.input.currentType,
        ...action.payload.currentType
      }
    }
  }
}
