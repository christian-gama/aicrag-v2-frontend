import IValidation from '@/domain/validation/validation.model'
import { FormActionPayload, FormStates } from '@/application/models/context/form/protocols/form.model'
import FormProps from '../form.model'
import handleValidation from './handleValidation'
import tryToSubmit from './tryToSubmit'

type Params = {
  dispatch: (options: FormActionPayload) => void
  event: React.FormEvent<HTMLFormElement>
  formData?: FormStates['formData']
  submitHandler: FormProps['submitHandler']
  validator?: IValidation
}

const onSubmitHandler = async (params: Params): Promise<void> => {
  const { dispatch, validator, event } = params

  dispatch({ type: 'SET_IS_SUBMITTING', payload: { isSubmitting: true } })

  event.preventDefault()

  const error = handleValidation({
    ...params
  })

  if (!validator || !error) {
    await tryToSubmit({ ...params })
  }

  dispatch({ type: 'SET_IS_SUBMITTING', payload: { isSubmitting: false } })
}

export default onSubmitHandler
