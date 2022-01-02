import { FormActionPayload } from '@/application/models/context/form/protocols/form.model'
import FormProps from '../form.model'

type Params = {
  dispatch: (options: FormActionPayload) => void
  submitHandler: FormProps['submitHandler']
  setIsAlertOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const tryToSubmit = async (params: Params): Promise<void> => {
  const { dispatch, submitHandler, setIsAlertOpen } = params

  try {
    await submitHandler()
    setIsAlertOpen(false)
  } catch (error: any) {
    dispatch({ type: 'SET_ERROR_MESSAGE', payload: { errorMessage: error.message } })
    dispatch({ type: 'SET_IS_VALID', payload: { isValid: false } })
    setIsAlertOpen(true)
  }

  dispatch({ type: 'SET_IS_SUBMITTED', payload: { isSubmitted: true } })
}

export default tryToSubmit
