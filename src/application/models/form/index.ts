import { createSlice } from '@reduxjs/toolkit'
import { FormPayloads, FormStates } from './protocols/form.model'

const initialFormState: FormStates = {
  isDirty: false,
  isSubmitted: false,
  isSubmitting: false,
  isValid: false,
  isValidating: false,
  errorMessage: undefined,
  formData: {}
}

const formSlice = createSlice({
  name: 'form',
  initialState: initialFormState,
  reducers: {
    resetForm: (state) => {
      state.isDirty = false
      state.isSubmitted = false
      state.isSubmitting = false
      state.isValid = false
      state.isValidating = false
    },

    setErrorMessage: (state, action: FormPayloads['errorPayload']) => {
      state.errorMessage = action.payload
    },

    setIsValid: (state, action: FormPayloads['utilityPayload']) => {
      state.isValid = action.payload
    },

    setIsDirty: (state, action: FormPayloads['utilityPayload']) => {
      state.isDirty = action.payload
    },

    setIsSubmitting: (state, action: FormPayloads['utilityPayload']) => {
      state.isSubmitting = action.payload
    },

    setIsSubmitted: (state, action: FormPayloads['utilityPayload']) => {
      state.isSubmitted = action.payload
    },

    setIsValidating: (state, action: FormPayloads['utilityPayload']) => {
      state.isValidating = action.payload
    },

    setFormData: (state, action: FormPayloads['inputPayload']) => {
      state.formData = {
        ...state.formData,
        ...action.payload
      }
    }
  }
})

export const formActions = formSlice.actions
export const formReducer = formSlice.reducer
