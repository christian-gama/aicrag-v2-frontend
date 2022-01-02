/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react'
import { FormActionPayload, FormStates } from './protocols/form.model'

export const initialFormState: FormStates = {
  form: {
    isDirty: false,
    isSubmitted: false,
    error: undefined,
    data: {},
    isSubmitting: false,
    isValid: false,
    isValidating: false,
    isFocused: false,
    isChanging: false,
    isResetting: false
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

const FormContext = React.createContext<{ state: FormStates, dispatch: (options: FormActionPayload) => void }>({
  state: initialFormState,
  dispatch: (options) => {}
})

export default FormContext
