import { Dispatch } from 'redux'
import { FormActions } from '@/application/models/form/protocols/form.model'
import FormProps from '../form.model'

type Params = {
  dispatch: Dispatch
  setErrorMessage: FormActions['setErrorMessage']
  setIsSubmitted: FormActions['setIsSubmitted']
  setIsValid: FormActions['setIsValid']
  submitHandler: FormProps['submitHandler']
  name: string
}

const tryToSubmit = async (params: Params): Promise<void> => {
  const { dispatch, setErrorMessage, setIsSubmitted, setIsValid, submitHandler, name } = params

  try {
    await submitHandler()
  } catch (error: any) {
    dispatch(setErrorMessage({ errorMessage: error.message, name }))
    dispatch(setIsValid({ isValid: false, name }))
  }

  dispatch(setIsSubmitted({ isSubmitted: true, name }))
}

export default tryToSubmit
