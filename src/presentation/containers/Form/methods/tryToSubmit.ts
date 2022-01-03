import { FormActionPayload, FormInputActionPayload } from '@/application/models/context/form/protocols/form.model'
import FormProps from '../form.model'

type Params = {
  dispatch: (options: FormActionPayload | FormInputActionPayload) => void
  submitHandler: FormProps['submitHandler']
  setIsPopoverOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const tryToSubmit = async (params: Params): Promise<void> => {
  const { dispatch, submitHandler, setIsPopoverOpen } = params

  try {
    await submitHandler()
    setIsPopoverOpen(false)
  } catch (error: any) {
    dispatch({ type: 'FORM/SET_ERROR', payload: { error: error.message } })
    dispatch({ type: 'FORM/SET_IS_VALID', payload: { isValid: false } })
    setIsPopoverOpen(true)
  }

  dispatch({ type: 'FORM/SET_IS_SUBMITTED', payload: { isSubmitted: true } })
}

export default tryToSubmit
