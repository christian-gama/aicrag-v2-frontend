import IHandler from '@/domain/handler/handler.model'
import IValidation from '@/services/validators/protocols/validation.model'
import { FormActionPayload, FormInputActionPayload, FormStates } from '@/context/models/form/protocols/form.model'
import ControlInputProps from '../protocols/ControlInput.model'

type Params = {
  dispatch: (options: FormActionPayload | FormInputActionPayload) => void
  event: React.FocusEvent<HTMLInputElement>
  name: ControlInputProps['name']
  data?: FormStates['form']['data']
  onBlur?: ControlInputProps['onBlur']
  validator?: IValidation
}

const onBlurHandler: IHandler<Params> = (params): void => {
  const { dispatch, event, data, name, onBlur, validator } = params

  const value = event.currentTarget.value
  const error = validator?.validate(name, { ...data, [name]: value })

  dispatch({ type: 'INPUT/SET_IS_FOCUSED', payload: { isFocused: { [name]: false } } })
  dispatch({ type: 'INPUT/SET_IS_TOUCHED', payload: { isTouched: { [name]: true } } })
  dispatch({ type: 'INPUT/SET_ERROR', payload: { error: { [name]: error } } })

  if (onBlur) onBlur(event)

  dispatch({ type: 'FORM/SET_FORM_DATA', payload: { data: { [name]: value } } })
  dispatch({ type: 'FORM/SET_IS_DIRTY', payload: { isDirty: true } })
  dispatch({ type: 'FORM/SET_IS_FOCUSED', payload: { isFocused: false } })
  dispatch({ type: 'FORM/SET_IS_CHANGING', payload: { isChanging: false } })
}

export default onBlurHandler
