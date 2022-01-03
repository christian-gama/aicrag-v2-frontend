import IValidation from '@/domain/validation/validation.model'
import {
  FormActionPayload,
  FormInputActionPayload,
  FormStates
} from '@/application/models/context/form/protocols/form.model'
import FormContainerProps from '../FormContainer.model'
import handleValidation from './handleValidation'
import tryToSubmit from './tryToSubmit'

type Params = {
  dispatch: (options: FormActionPayload | FormInputActionPayload) => void
  event: React.FormEvent<HTMLFormElement>
  data?: FormStates['form']['data']
  submitHandler: FormContainerProps['submitHandler']
  validator?: IValidation
  setIsPopoverOpen: React.Dispatch<React.SetStateAction<boolean>>
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
