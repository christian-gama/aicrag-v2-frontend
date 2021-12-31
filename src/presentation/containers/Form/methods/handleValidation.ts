import { Dispatch } from 'redux'
import IValidation from '@/domain/validation/validation.model'
import { FormStates, FormActions } from '@/application/models/form/protocols/form.model'

type Params = {
  dispatch: Dispatch
  formData: FormStates['formData']
  setErrorMessage: FormActions['setErrorMessage']
  setIsValid: FormActions['setIsValid']
  setIsValidating: FormActions['setIsValidating']
  validation?: IValidation
}

const handleValidation = ({ validation, dispatch, setErrorMessage, formData, setIsValid, setIsValidating }: Params) => {
  dispatch(setIsValidating(true))

  if (validation) {
    for (const key in formData) {
      const error = validation.validate(key, formData)

      if (error) {
        dispatch(setErrorMessage(error))
        dispatch(setIsValid(false))
        dispatch(setIsValidating(false))

        return error
      }
    }
  }

  dispatch(setIsValid(true))
  dispatch(setIsValidating(false))
}

export default handleValidation
