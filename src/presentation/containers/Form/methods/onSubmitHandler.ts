import { Dispatch } from 'redux'
import { FormActions, FormStates } from '@/domain/form/form.model'
import IValidation from '@/domain/validation/validation.model'
import FormProps from '../form.model'
import handleValidation from './handleValidation'
import tryToSubmit from './tryToSubmit'

type Params = {
  dispatch: Dispatch
  event: React.FormEvent<HTMLFormElement>
  formData: FormStates['formData']
  setErrorMessage: FormActions['setErrorMessage']
  setIsSubmitted: FormActions['setIsSubmitted']
  setIsSubmitting: FormActions['setIsSubmitting']
  setIsValid: FormActions['setIsValid']
  setIsValidating: FormActions['setIsValidating']
  submitHandler: FormProps['submitHandler']
  validation?: IValidation
}

const onSubmitHandler = async (params: Params): Promise<void> => {
  const { dispatch, event, setIsSubmitting, setIsValidating, validation } = params

  dispatch(setIsSubmitting(true))
  event.preventDefault()

  const error = handleValidation({
    ...params,
    setIsValidating
  })

  if (!validation || !error) {
    await tryToSubmit({ ...params })
  }

  dispatch(setIsSubmitting(false))
}

export default onSubmitHandler
