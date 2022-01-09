import IHandler from '@/domain/handler/handler.model'
import IValidation from '@/services/validators/protocols/validation.model'
import { FormActionPayload, FormInputActionPayload, FormStates } from '@/context/models/form/protocols/form.model'
import ControlledInputProps from '../ControlledInput.model'

type Params = {
  dispatch: (options: FormActionPayload | FormInputActionPayload) => void
  event: React.FocusEvent<HTMLInputElement>
  data?: FormStates['form']['data']
  name: ControlledInputProps['name']
  onFocus?: ControlledInputProps['onFocus']
  validator?: IValidation
}

const onFocusHandler: IHandler<Params> = (params): void => {
  const { dispatch, event, data, name, onFocus, validator } = params

  const value = event.currentTarget.value
  const error = validator?.validate(name, { ...data, [name]: value })

  dispatch({ type: 'INPUT/SET_IS_FOCUSED', payload: { isFocused: { [name]: true } } })
  dispatch({ type: 'INPUT/SET_IS_VALID', payload: { isValid: { [name]: !error } } })

  if (onFocus) onFocus(event)

  dispatch({ type: 'FORM/SET_FORM_DATA', payload: { data: { [name]: value } } })
  dispatch({ type: 'FORM/SET_IS_FOCUSED', payload: { isFocused: true } })
}

export default onFocusHandler
