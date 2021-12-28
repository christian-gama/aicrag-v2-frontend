import { createSlice } from '@reduxjs/toolkit'
import { IForm } from './protocols/form.model'

const initialFormState: IForm['states'] = {
  isDirty: false,
  isSubmitted: false,
  isSubmitting: false,
  isValid: false,
  isValidating: false,
  errorMessage: undefined,
  formData: {}
}

export const makeFormSlice = <T extends IForm['name']>(name: T) => {
  return createSlice({
    name: name,
    initialState: initialFormState,
    reducers: {
      resetForm: (state) => {
        state.isDirty = false
        state.isSubmitted = false
        state.isSubmitting = false
        state.isValid = false
        state.isValidating = false
      },

      setErrorMessage: (state, action: IForm['payloads']['error']) => {
        state.errorMessage = action.payload
      },

      setIsValid: (state, action: IForm['payloads']['utility']) => {
        state.isValid = action.payload
      },

      setIsDirty: (state, action: IForm['payloads']['utility']) => {
        state.isDirty = action.payload
      },

      setIsSubmitting: (state, action: IForm['payloads']['utility']) => {
        state.isSubmitting = action.payload
      },

      setIsSubmitted: (state, action: IForm['payloads']['utility']) => {
        state.isSubmitted = action.payload
      },

      setIsValidating: (state, action: IForm['payloads']['utility']) => {
        state.isValidating = action.payload
      },

      setFormData: (state, action: IForm['payloads']['input']) => {
        state.formData = {
          ...state.formData,
          ...action.payload
        }
      }
    }
  })
}
