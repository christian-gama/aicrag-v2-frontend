import IValidation from '@/domain/validation/validation.model'
import { FormActionPayload, FormStates } from '@/application/models/context/form/protocols/form.model'

type Params = {
  dispatch: (options: FormActionPayload) => void
  formData?: FormStates['formData']
  validator?: IValidation
}

const handleValidation = (params: Params) => {
  const { validator, dispatch, formData } = params

  dispatch({ type: 'SET_IS_VALIDATING', payload: { isValidating: true } })

  if (validator) {
    for (const key in formData) {
      const error = validator.validate(key, formData)

      if (error) {
        dispatch({ type: 'SET_ERROR_MESSAGE', payload: { errorMessage: error } })
        dispatch({ type: 'SET_IS_VALID', payload: { isValid: false } })
        dispatch({ type: 'SET_IS_VALIDATING', payload: { isValidating: false } })

        return error
      }
    }
  }

  dispatch({ type: 'SET_IS_VALIDATING', payload: { isValidating: false } })
  dispatch({ type: 'SET_IS_VALID', payload: { isValid: true } })
}

export default handleValidation
