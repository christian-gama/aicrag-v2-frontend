import { Dispatch } from 'redux'
import IValidation from '@/domain/validation/validation.model'
import { FormActions, FormProperties } from '@/application/models/form/protocols/form.model'
import FormProps from '../form.model'
import handleValidation from './handleValidation'
import tryToSubmit from './tryToSubmit'

type Params = {
  dispatch: Dispatch
  event: React.FormEvent<HTMLFormElement>
  formData: FormProperties['formData']
  setErrorMessage: FormActions['setErrorMessage']
  setIsSubmitted: FormActions['setIsSubmitted']
  setIsSubmitting: FormActions['setIsSubmitting']
  setIsValid: FormActions['setIsValid']
  setIsValidating: FormActions['setIsValidating']
  submitHandler: FormProps['submitHandler']
  validation?: IValidation
  name: string
}

const onSubmitHandler = async (params: Params): Promise<void> => {
  const { dispatch, setIsSubmitting, validation, name, event } = params

  dispatch(setIsSubmitting({ isSubmitting: true, name }))
  event.preventDefault()

  const error = handleValidation({
    ...params
  })

  if (!validation || !error) {
    await tryToSubmit({ ...params })
  }

  dispatch(setIsSubmitting({ isSubmitting: false, name }))
}

export default onSubmitHandler
