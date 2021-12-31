import { Dispatch } from 'redux'
import IValidation from '@/domain/validation/validation.model'
import { FormActions, FormProperties } from '@/application/models/form/protocols/form.model'

type Params = {
  dispatch: Dispatch
  formData?: FormProperties['formData']
  setErrorMessage: FormActions['setErrorMessage']
  setIsValid: FormActions['setIsValid']
  setIsValidating: FormActions['setIsValidating']
  validation?: IValidation
  name: string
}

const handleValidation = (params: Params) => {
  const { validation, dispatch, setErrorMessage, formData, setIsValid, setIsValidating, name } = params

  dispatch(setIsValidating({ isValidating: true, name }))

  if (validation) {
    for (const key in formData) {
      const error = validation.validate(key, formData)

      if (error) {
        dispatch(setErrorMessage({ errorMessage: error, name }))
        dispatch(setIsValid({ isValid: false, name }))
        dispatch(setIsValidating({ isValidating: false, name }))

        return error
      }
    }
  }

  dispatch(setIsValid({ isValid: true, name }))
  dispatch(setIsValidating({ isValidating: false, name }))
}

export default handleValidation
