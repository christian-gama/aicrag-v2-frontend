import { FormActionPayload } from '@/application/models/context/form/protocols/form.model'
import FormProps from '../form.model'

type Params = {
  dispatch: (options: FormActionPayload) => void
  submitHandler: FormProps['submitHandler']
}

const tryToSubmit = async (params: Params): Promise<void> => {
  const { dispatch, submitHandler } = params

  try {
    await submitHandler()
  } catch (error: any) {
    dispatch({ type: 'SET_ERROR_MESSAGE', payload: { errorMessage: error.message } })
    dispatch({ type: 'SET_IS_VALID', payload: { isValid: false } })
  }

  dispatch({ type: 'SET_IS_SUBMITTED', payload: { isSubmitted: true } })
}

export default tryToSubmit
