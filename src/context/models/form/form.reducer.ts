import {
  FormActionPayload,
  FormInputActionPayload,
  FormStates
} from './protocols/form.model'

export const formReducer = (
  state: FormStates<any>,
  action: FormActionPayload | FormInputActionPayload
): FormStates<any> => {
  switch (action.type) {
    case 'FORM/RESET_FORM':
      return {
        form: {
          validator: undefined,
          isFormFilled: false,
          isSubmitting: false,
          isValidating: false,
          isSubmitted: false,
          isResetting: true,
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

    case 'FORM/SET_IS_RESETTING':
      return {
        ...state,
        form: {
          ...state.form,
          isResetting: action.payload.isResetting!
        }
      }

    case 'FORM/SET_ERROR':
      return {
        ...state,
        form: {
          ...state.form,
          error: action.payload.error
        }
      }

    case 'FORM/SET_IS_VALID':
      return {
        ...state,
        form: { ...state.form, isValid: action.payload.isValid! }
      }

    case 'FORM/SET_IS_SUBMITTING':
      return {
        ...state,
        form: { ...state.form, isSubmitting: action.payload.isSubmitting! }
      }

    case 'FORM/SET_IS_SUBMITTED':
      return {
        ...state,
        form: { ...state.form, isSubmitted: action.payload.isSubmitted! }
      }

    case 'FORM/SET_IS_VALIDATING':
      return {
        ...state,
        form: { ...state.form, isValidating: action.payload.isValidating! }
      }

    case 'FORM/SET_FORM_DATA':
      return {
        ...state,
        form: {
          ...state.form,
          data: {
            ...state.form.data,
            ...action.payload.data
          }
        }
      }

    case 'FORM/SET_IS_FORM_FILLED':
      return {
        ...state,
        form: {
          ...state.form,
          isFormFilled: action.payload.isFormFilled!
        }
      }

    case 'FORM/SET_VALIDATOR':
      return {
        ...state,
        form: {
          ...state.form,
          validator: action.payload.validator
        }
      }

    case 'FORM/SET_IS_DIRTY':
      return {
        ...state,
        form: {
          ...state.form,
          isDirty: action.payload.isDirty!
        }
      }

    case 'INPUT/SET_CURRENT_TYPE':
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

    case 'INPUT/SET_ERROR':
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

    case 'INPUT/SET_IS_TOUCHED':
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

    case 'INPUT/SET_IS_FOCUSED':
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

    case 'INPUT/SET_IS_VALID':
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

    case 'INPUT/SET_VALUE':
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
}
