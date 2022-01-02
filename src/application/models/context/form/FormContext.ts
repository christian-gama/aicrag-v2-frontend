import React from 'react'
import { FormActionPayload, FormStates } from './protocols/form.model'

export const initialFormState: FormStates = {
  isDirty: false,
  isSubmitted: false,
  errorMessage: undefined,
  formData: {},
  isSubmitting: false,
  isValid: false,
  isValidating: false,
  isFocused: false,
  isChanging: false,
  isResetting: false
}

const FormContext = React.createContext({
  state: initialFormState,
  dispatch: (options: FormActionPayload) => {}
})

export default FormContext
