import {
  resetForm,
  setFormError,
  setFormIsValid,
  setFormIsSubmitting,
  setFormIsSubmitted,
  setFormIsValidating,
  setFormData,
  setFormValidator,
  setIsResetting
} from './form.actions'
import {
  setInputCurrentType,
  setInputError,
  setInputIsFocused,
  setInputIsTouched,
  setInputIsValid,
  setInputValue
} from './input.actions'
import {
  FormActionPayload,
  FormInputActionPayload,
  FormStates
} from './protocols/form.model'

const formReducer = (
  state: FormStates,
  action: FormActionPayload | FormInputActionPayload
): FormStates => {
  switch (action.type) {
    case 'FORM/RESET_FORM':
      return resetForm()

    case 'FORM/SET_IS_RESETTING':
      return setIsResetting(state, action)

    case 'FORM/SET_ERROR':
      return setFormError(state, action)

    case 'FORM/SET_IS_VALID':
      return setFormIsValid(state, action)

    case 'FORM/SET_IS_SUBMITTING':
      return setFormIsSubmitting(state, action)

    case 'FORM/SET_IS_SUBMITTED':
      return setFormIsSubmitted(state, action)

    case 'FORM/SET_IS_VALIDATING':
      return setFormIsValidating(state, action)

    case 'FORM/SET_FORM_DATA':
      return setFormData(state, action)

    case 'FORM/SET_VALIDATOR':
      return setFormValidator(state, action)

    case 'INPUT/SET_CURRENT_TYPE':
      return setInputCurrentType(state, action)

    case 'INPUT/SET_ERROR':
      return setInputError(state, action)

    case 'INPUT/SET_IS_TOUCHED':
      return setInputIsTouched(state, action)

    case 'INPUT/SET_IS_FOCUSED':
      return setInputIsFocused(state, action)

    case 'INPUT/SET_IS_VALID':
      return setInputIsValid(state, action)

    case 'INPUT/SET_VALUE':
      return setInputValue(state, action)
  }
}

export default formReducer
