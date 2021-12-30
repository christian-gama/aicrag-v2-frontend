import { Dispatch } from 'redux'
import { FormActions } from '@/domain/form/form.model'
import FormProps from '../form.model'

type Params = {
  dispatch: Dispatch
  setErrorMessage: FormActions['setErrorMessage']
  setIsSubmitted: FormActions['setIsSubmitted']
  setIsValid: FormActions['setIsValid']
  submitHandler: FormProps['submitHandler']
}

const tryToSubmit = async (params: Params): Promise<void> => {
  const { dispatch, setErrorMessage, setIsSubmitted, setIsValid, submitHandler } = params

  try {
    await submitHandler()
  } catch (error: any) {
    dispatch(setErrorMessage(error.message))
    dispatch(setIsValid(false))
  }

  dispatch(setIsSubmitted(true))
}

export default tryToSubmit
