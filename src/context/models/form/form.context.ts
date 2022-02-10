import React from 'react'
import {
  FormStates,
  FormActionPayload,
  FormInputActionPayload
} from './protocols/form.model'

export const initialFormState: FormStates<any> = {
  form: {
    isSubmitting: false,
    isValidating: false,
    isSubmitted: false,
    isResetting: false,
    error: undefined,
    isDirty: false,
    isValid: false,
    data: {}
  },
  input: {
    currentType: {},
    isFocused: {},
    isTouched: {},
    isValid: {},
    error: {},
    value: {}
  }
}

export const FormContext = React.createContext<{
  dispatch: (options: FormActionPayload | FormInputActionPayload) => void
  state: FormStates<any>
}>({
      state: initialFormState,
      dispatch: (options) => {}
    })
