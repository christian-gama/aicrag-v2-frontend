import IValidation from '@/services/validators/protocols/validation.model'
import { FormActionPayload, FormInputActionPayload, FormStates } from '@/context/models/form/protocols/form.model'
import FormProps from '../BaseForm.model'
import handleValidation from './handleValidation'
import tryToSubmit from './tryToSubmit'

type Params = {
  dispatch: (options: FormActionPayload | FormInputActionPayload) => void
  event: React.FormEvent<HTMLFormElement>
  data?: FormStates['form']['data']
  submitHandler: FormProps['submitHandler']
  validator?: IValidation
  setIsErrorPopoverOpen: React.Dispatch<React.SetStateAction<boolean>>
  setIsSuccessPopoverOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const onSubmitHandler = async (params: Params): Promise<void> => {
  const { dispatch, validator, event } = params

  dispatch({ type: 'FORM/SET_IS_SUBMITTING', payload: { isSubmitting: true } })

  event.preventDefault()

  const error = handleValidation({
    ...params
  })

  if (!validator || !error) {
    await tryToSubmit({ ...params })
  }

  dispatch({ type: 'FORM/SET_IS_SUBMITTING', payload: { isSubmitting: false } })
}

export default onSubmitHandler
