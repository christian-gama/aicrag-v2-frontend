import { createSlice } from '@reduxjs/toolkit'
import { FormPayloads, FormStates } from './protocols/form.model'

const initialFormState: FormStates = {
  forms: [{}] as FormStates['forms']
}

const formSlice = createSlice({
  name: 'form',
  initialState: initialFormState,
  reducers: {
    init: (state, action: FormPayloads['namePayload']) => {
      if (state.forms.find((form) => form.name === action.payload)) return

      state.forms.push({
        name: action.payload,
        isDirty: false,
        isSubmitted: false,
        errorMessage: undefined,
        formData: {},
        isSubmitting: false,
        isValid: false,
        isValidating: false
      })

      return state
    },

    resetForm: (state, action: FormPayloads['namePayload']) => {
      if (state.forms.length > 0) {
        const form = state.forms.find((form) => form.name === action.payload)

        if (form) {
          form.isDirty = false
          form.isSubmitted = false
          form.errorMessage = undefined
          form.isSubmitting = false
          form.isValid = false
          form.isValidating = false

          for (const data in form.formData) {
            if (form.formData[data]) {
              form.formData[data] = undefined
            }
          }

          return state
        }
      }
    },

    setErrorMessage: (state, action: FormPayloads['errorPayload']) => {
      if (state.forms.length > 0) {
        const form = state.forms.find((form) => form.name === action.payload.name)

        if (form) {
          form.errorMessage = action.payload.errorMessage
        }
      }

      return state
    },

    setIsValid: (state, action: { payload: Pick<FormPayloads['utilityPayload']['payload'], 'isValid' | 'name'> }) => {
      if (state.forms.length > 0) {
        const form = state.forms.find((form) => form.name === action.payload.name)

        if (form) {
          form.isValid = action.payload.isValid

          return state
        }
      }
    },

    setIsDirty: (state, action: { payload: Pick<FormPayloads['utilityPayload']['payload'], 'isDirty' | 'name'> }) => {
      if (state.forms.length > 0) {
        const form = state.forms.find((form) => form.name === action.payload.name)

        if (form) {
          form.isDirty = action.payload.isDirty

          return state
        }
      }
    },

    setIsSubmitting: (
      state,
      action: { payload: Pick<FormPayloads['utilityPayload']['payload'], 'isSubmitting' | 'name'> }
    ) => {
      if (state.forms.length > 0) {
        const form = state.forms.find((form) => form.name === action.payload.name)

        if (form) {
          form.isSubmitting = action.payload.isSubmitting

          return state
        }
      }
    },

    setIsSubmitted: (
      state,
      action: { payload: Pick<FormPayloads['utilityPayload']['payload'], 'isSubmitted' | 'name'> }
    ) => {
      if (state.forms.length > 0) {
        const form = state.forms.find((form) => form.name === action.payload.name)

        if (form) {
          form.isSubmitted = action.payload.isSubmitted

          return state
        }
      }
    },

    setIsValidating: (
      state,
      action: { payload: Pick<FormPayloads['utilityPayload']['payload'], 'isValidating' | 'name'> }
    ) => {
      if (state.forms.length > 0) {
        const form = state.forms.find((form) => form.name === action.payload.name)

        if (form) {
          form.isValidating = action.payload.isValidating

          return state
        }
      }
    },

    setFormData: (state, action: FormPayloads['inputPayload']) => {
      if (state.forms.length > 0) {
        const form = state.forms.find((form) => form.name === action.payload.name)

        if (form) {
          form.formData = {
            ...form.formData,
            ...action.payload
          }

          return state
        }
      }
    }
  }
})

export const formActions = formSlice.actions
export const formReducer = formSlice.reducer
