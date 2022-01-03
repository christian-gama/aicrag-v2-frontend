import IValidation from '@/domain/validation/validation.model'
import { FormActionPayload, FormStates } from '@/application/models/context/form/protocols/form.model'
import FormProps from '../form.model'
import handleValidation from './handleValidation'
import tryToSubmit from './tryToSubmit'

type Params = {
  dispatch: (options: FormActionPayload) => void
  event: React.FormEvent<HTMLFormElement>
  data?: FormStates['form']['data']
  submitHandler: FormProps['submitHandler']
  validator?: IValidation
  setIsPopoverOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const onSubmitHandler = async (params: Params): Promise<void> => {
  const { dispatch, validator, event } = params

  dispatch({ type: 'FORM/SET_IS_SUBMITTING', payload: { isSubmitting: true } })

  event.preventDefault()
  console.log('submithandler')
  const error = handleValidation({
    ...params
  })

  if (!validator || !error) {
    await tryToSubmit({ ...params })
  }

  dispatch({ type: 'FORM/SET_IS_SUBMITTING', payload: { isSubmitting: false } })
}

export default onSubmitHandler
